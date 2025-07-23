import { useState } from "react";
import { Header } from "@/components/Header";
import { SymptomInput } from "@/components/SymptomInput";
import { DiagnosisResults } from "@/components/DiagnosisResults";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Stethoscope, Mic, Camera, Shield, Zap, Users } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

const Index = () => {
  const [currentView, setCurrentView] = useState<"home" | "input" | "results">("home");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Mock data for demonstration
  const mockDiagnoses = [
    {
      condition: "Common Cold",
      confidence: 85,
      severity: "low" as const,
      description: "Viral infection affecting the upper respiratory tract, commonly causing runny nose, cough, and mild fever."
    },
    {
      condition: "Seasonal Allergies", 
      confidence: 65,
      severity: "low" as const,
      description: "Allergic reaction to environmental factors like pollen, causing similar symptoms to a cold."
    },
    {
      condition: "Sinusitis",
      confidence: 45,
      severity: "medium" as const,
      description: "Inflammation of the sinuses that can cause facial pressure, congestion, and headaches."
    }
  ];

  const mockRecommendations = [
    {
      type: "test" as const,
      title: "COVID-19 Rapid Test",
      description: "Consider taking a rapid antigen test to rule out COVID-19 infection.",
      urgency: "medium" as const
    },
    {
      type: "medication" as const,
      title: "Over-the-counter Relief",
      description: "Acetaminophen or ibuprofen can help reduce fever and aches. Decongestants may provide nasal relief.",
      urgency: "low" as const
    },
    {
      type: "lifestyle" as const,
      title: "Rest and Hydration",
      description: "Get plenty of rest and stay well-hydrated. Use a humidifier to ease breathing.",
      urgency: "low" as const
    }
  ];

  const handleAnalyze = async (symptoms: string) => {
    setIsAnalyzing(true);
    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
    setCurrentView("results");
  };

  const handleNewAnalysis = () => {
    setCurrentView("input");
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning models analyze your symptoms using medical knowledge databases."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Input",
      description: "Describe your symptoms naturally using voice recognition for faster input."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Image Recognition",
      description: "Upload photos of visible symptoms for comprehensive multimodal analysis."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy Protected",
      description: "Your health data is encrypted and processed securely with complete privacy."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      description: "Get immediate analysis and recommendations in seconds, not hours."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Trained",
      description: "Models trained on extensive medical literature and real-world healthcare data."
    }
  ];

  if (currentView === "input") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <SymptomInput onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        </main>
      </div>
    );
  }

  if (currentView === "results") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <DiagnosisResults 
            diagnoses={mockDiagnoses}
            recommendations={mockRecommendations}
            onNewAnalysis={handleNewAnalysis}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  🧠 AI-Powered Healthcare Assistant
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Smart Diagnosis with{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    AutoCureAI
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Leverage cutting-edge machine learning to analyze symptoms, suggest diagnoses, 
                  and provide personalized health recommendations. Your AI health companion for smarter healthcare decisions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="medical" 
                  size="xl" 
                  onClick={() => setCurrentView("input")}
                  className="gap-3"
                >
                  <Stethoscope className="w-5 h-5" />
                  Start Health Analysis
                </Button>
                <Button variant="outline" size="xl" className="gap-3">
                  <Brain className="w-5 h-5" />
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Analyses Done</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-float">
                <img 
                  src={heroImage} 
                  alt="AutoCureAI Medical Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Powered by Advanced AI Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of healthcare with our comprehensive symptom analysis platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-float transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Experience Smart Healthcare?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of users who trust AutoCureAI for intelligent health insights and recommendations.
          </p>
          <Button 
            variant="secondary" 
            size="xl" 
            onClick={() => setCurrentView("input")}
            className="gap-3"
          >
            <Stethoscope className="w-5 h-5" />
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;

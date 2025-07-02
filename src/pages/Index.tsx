import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Code, Star, Search } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-6 animate-fade-in">
            🚀 AI-Powered Automation Marketplace
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-hero bg-clip-text text-transparent">
              AutoButler.ai
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Discover, customize, and deploy powerful automation templates. 
            Transform your business with AI-driven workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button variant="hero" size="xl">
              <Search className="mr-2 h-5 w-5" />
              Explore Templates
            </Button>
            <Button variant="outline" size="xl">
              <Code className="mr-2 h-5 w-5" />
              Start Publishing
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose AutoButler.ai?</h2>
            <p className="text-xl text-muted-foreground">The complete automation ecosystem</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Ready-to-Use Templates",
                description: "Browse thousands of pre-built automation workflows"
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Easy Customization", 
                description: "Modify templates to fit your exact business needs"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Marketplace Earnings",
                description: "Publish your automations and earn passive income"
              }
            ].map((feature, i) => (
              <Card key={i} className="hover:shadow-elegant transition-smooth animate-fade-in">
                <CardHeader>
                  <div className="bg-gradient-primary rounded-lg p-3 w-fit text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

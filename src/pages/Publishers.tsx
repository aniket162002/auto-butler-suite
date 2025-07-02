import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Code, User, Zap } from "lucide-react";

const Publishers = () => {
  const publishers = [
    {
      id: 1,
      name: "TechFlow Studios",
      description: "Leading creator of marketing automation workflows",
      avatar: "photo-1649972904349-6e44c42644a7",
      templates: 24,
      rating: 4.9,
      revenue: "$12,500",
      specialties: ["Marketing", "E-commerce", "CRM"]
    },
    {
      id: 2,
      name: "AI Automation Co",
      description: "Enterprise-focused automation solutions",
      avatar: "photo-1488590528505-98d2b5aba04b",
      templates: 18,
      rating: 4.8,
      revenue: "$8,900",
      specialties: ["Finance", "HR", "Operations"]
    },
    {
      id: 3,
      name: "WorkFlow Wizards",
      description: "Small business automation specialists",
      avatar: "photo-1581090464777-f3220bbe1b8b",
      templates: 31,
      rating: 4.7,
      revenue: "$15,200",
      specialties: ["Support", "Sales", "Marketing"]
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            👨‍💻 Meet Our Creators
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              Template Publishers
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the talented creators behind our automation templates
          </p>
        </div>

        {/* Publishers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishers.map((publisher) => (
            <Card key={publisher.id} className="group hover:shadow-elegant transition-smooth">
              <CardHeader className="text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarImage 
                    src={`https://images.unsplash.com/${publisher.avatar}?w=80&h=80&fit=crop&crop=face`} 
                    alt={publisher.name} 
                  />
                  <AvatarFallback className="gradient-primary text-white text-lg">
                    {publisher.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{publisher.name}</CardTitle>
                <p className="text-muted-foreground text-sm">
                  {publisher.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{publisher.templates}</div>
                    <div className="text-xs text-muted-foreground">Templates</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-lg font-bold">{publisher.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-success">{publisher.revenue}</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="font-medium mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {publisher.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <User className="mr-2 h-4 w-4" />
                    Follow
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <Code className="mr-2 h-4 w-4" />
                    View Templates
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Become Publisher CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto gradient-hero text-white">
            <CardHeader>
              <Zap className="h-12 w-12 mx-auto mb-4 animate-pulse" />
              <CardTitle className="text-2xl">Become a Publisher</CardTitle>
              <p className="text-white/90">
                Share your automation expertise and earn passive income
              </p>
            </CardHeader>
            <CardContent>
              <Button variant="glass" size="lg">
                <Code className="mr-2 h-5 w-5" />
                Start Publishing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Publishers;
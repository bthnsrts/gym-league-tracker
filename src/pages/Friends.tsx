import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Zap, Target, Crown, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Friends = () => {
  // Mock bot friends data
  const botFriends = [
    {
      id: 1,
      name: "FitBot Alex",
      level: 47,
      totalDays: 156,
      monthlyDays: 18,
      status: "online",
      achievement: "Consistency King",
      avatar: "FA",
      color: "from-fitness-orange to-fitness-blue"
    },
    {
      id: 2,
      name: "GymBot Sarah",
      level: 52,
      totalDays: 203,
      monthlyDays: 22,
      status: "training",
      achievement: "Cardio Queen",
      avatar: "GS",
      color: "from-fitness-blue to-fitness-green"
    },
    {
      id: 3,
      name: "IronBot Mike",
      level: 38,
      totalDays: 128,
      monthlyDays: 15,
      status: "resting",
      achievement: "Strength Master",
      avatar: "IM",
      color: "from-fitness-green to-fitness-purple"
    },
    {
      id: 4,
      name: "FlexBot Emma",
      level: 44,
      totalDays: 145,
      monthlyDays: 20,
      status: "online",
      achievement: "Flexibility Pro",
      avatar: "FE",
      color: "from-fitness-purple to-fitness-orange"
    },
    {
      id: 5,
      name: "PowerBot Chris",
      level: 41,
      totalDays: 134,
      monthlyDays: 16,
      status: "offline",
      achievement: "Power Lifter",
      avatar: "PC",
      color: "from-fitness-orange to-fitness-green"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-fitness-green";
      case "training": return "bg-fitness-orange";
      case "resting": return "bg-fitness-blue";
      default: return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online": return "Online";
      case "training": return "Training";
      case "resting": return "Resting";
      default: return "Offline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-fitness bg-clip-text text-transparent">
            Fitness Friends
          </h1>
          <p className="text-muted-foreground">Connect with AI training partners and compete together!</p>
        </div>

        {/* Friends Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-fitness-orange/20">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-fitness-orange mx-auto mb-2" />
              <p className="text-2xl font-bold">{botFriends.length}</p>
              <p className="text-sm text-muted-foreground">Training Buddies</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-fitness-blue/20">
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 text-fitness-blue mx-auto mb-2" />
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Active Challenges</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-fitness-green/20">
            <CardContent className="p-4 text-center">
              <Zap className="h-8 w-8 text-fitness-green mx-auto mb-2" />
              <p className="text-2xl font-bold">127</p>
              <p className="text-sm text-muted-foreground">Motivation Points</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-fitness-purple/20">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 text-fitness-purple mx-auto mb-2" />
              <p className="text-2xl font-bold">85%</p>
              <p className="text-sm text-muted-foreground">Win Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Friends List */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-fitness-orange" />
              Your Training Partners
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {botFriends.map((friend) => (
                <div key={friend.id} className="flex items-center justify-between p-4 rounded-lg bg-background/30 border border-border/20 hover:bg-background/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className={`bg-gradient-to-r ${friend.color} text-white font-bold`}>
                          {friend.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(friend.status)}`}></div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{friend.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          Level {friend.level}
                        </Badge>
                        {friend.level > 50 && (
                          <Crown className="h-4 w-4 text-fitness-orange" />
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {friend.achievement}
                        </span>
                        <span>{friend.totalDays} total days</span>
                        <span>{friend.monthlyDays} this month</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className={getStatusColor(friend.status)}>
                      {getStatusText(friend.status)}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Challenge
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-fitness">
            <CardContent className="p-6 text-center text-white">
              <Trophy className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Start Weekly Challenge</h3>
              <p className="text-white/80 mb-4">Challenge all your friends to a 7-day workout streak!</p>
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                Create Challenge
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-fitness-blue/20">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-fitness-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Find New Partners</h3>
              <p className="text-muted-foreground mb-4">Discover AI training partners with similar fitness goals</p>
              <Button className="bg-gradient-fitness text-white">
                Browse Partners
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-fitness-green" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background/20">
                <div className="w-2 h-2 bg-fitness-green rounded-full"></div>
                <span className="text-sm"><strong>FitBot Alex</strong> completed a 60-minute workout session</span>
                <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background/20">
                <div className="w-2 h-2 bg-fitness-blue rounded-full"></div>
                <span className="text-sm"><strong>GymBot Sarah</strong> achieved a new personal best in cardio</span>
                <span className="text-xs text-muted-foreground ml-auto">4 hours ago</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background/20">
                <div className="w-2 h-2 bg-fitness-orange rounded-full"></div>
                <span className="text-sm"><strong>IronBot Mike</strong> started a new strength training program</span>
                <span className="text-xs text-muted-foreground ml-auto">6 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Friends;
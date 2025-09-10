import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Crown, Medal, Timer, Users, Zap, Calendar, Target } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Leagues = () => {
  // Mock current league
  const currentLeague = {
    id: 1,
    name: "January Iron League",
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    participants: 12,
    daysLeft: 8,
    position: 3,
    totalDays: 18,
    prize: "50 motivation points"
  };

  // Mock leaderboard
  const leaderboard = [
    { position: 1, name: "FitBot Alex", days: 24, points: 240, avatar: "FA", color: "from-fitness-orange to-fitness-blue" },
    { position: 2, name: "GymBot Sarah", days: 22, points: 220, avatar: "GS", color: "from-fitness-blue to-fitness-green" },
    { position: 3, name: "You", days: 18, points: 180, avatar: "ME", color: "from-fitness-green to-fitness-purple", isUser: true },
    { position: 4, name: "IronBot Mike", days: 17, points: 170, avatar: "IM", color: "from-fitness-purple to-fitness-orange" },
    { position: 5, name: "FlexBot Emma", days: 16, points: 160, avatar: "FE", color: "from-fitness-orange to-fitness-green" },
    { position: 6, name: "PowerBot Chris", days: 15, points: 150, avatar: "PC", color: "from-fitness-blue to-fitness-purple" },
  ];

  // Mock available leagues
  const availableLeagues = [
    {
      id: 2,
      name: "February Fire League",
      startDate: "2024-02-05",
      difficulty: "Intermediate",
      participants: 8,
      maxParticipants: 15,
      entryFee: "10 points",
      prize: "100 motivation points + Badge"
    },
    {
      id: 3,
      name: "March Madness League",
      startDate: "2024-03-04",
      difficulty: "Advanced",
      participants: 3,
      maxParticipants: 10,
      entryFee: "25 points",
      prize: "250 motivation points + Crown"
    },
    {
      id: 4,
      name: "Beginner's Boost League",
      startDate: "2024-02-12",
      difficulty: "Beginner",
      participants: 12,
      maxParticipants: 20,
      entryFee: "Free",
      prize: "50 motivation points"
    }
  ];

  const getPodiumIcon = (position: number) => {
    switch (position) {
      case 1: return <Crown className="h-5 w-5 text-yellow-400" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Medal className="h-5 w-5 text-amber-600" />;
      default: return null;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-fitness-green";
      case "Intermediate": return "bg-fitness-blue";
      case "Advanced": return "bg-fitness-orange";
      default: return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-fitness bg-clip-text text-transparent">
            Fitness Leagues
          </h1>
          <p className="text-muted-foreground">Compete with AI trainers in monthly fitness challenges!</p>
        </div>

        {/* Current League Status */}
        <Card className="bg-gradient-fitness">
          <CardContent className="p-6">
            <div className="text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Trophy className="h-8 w-8" />
                  <div>
                    <h2 className="text-xl font-bold">{currentLeague.name}</h2>
                    <p className="text-white/80">Currently in position #{currentLeague.position}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">{currentLeague.daysLeft}</p>
                  <p className="text-white/80">days left</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{currentLeague.totalDays}</p>
                  <p className="text-white/80">Your Days</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{currentLeague.participants}</p>
                  <p className="text-white/80">Participants</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">3rd</p>
                  <p className="text-white/80">Position</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">{currentLeague.prize}</p>
                  <p className="text-white/80">Current Prize</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-fitness-orange" />
              {currentLeague.name} Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((participant) => (
                <div
                  key={participant.position}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                    participant.isUser 
                      ? "bg-gradient-fitness/10 border-fitness-orange/30" 
                      : "bg-background/30 border-border/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 min-w-[60px]">
                      <span className="text-2xl font-bold text-muted-foreground">
                        #{participant.position}
                      </span>
                      {getPodiumIcon(participant.position)}
                    </div>
                    
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className={`bg-gradient-to-r ${participant.color} text-white font-bold`}>
                        {participant.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`font-semibold ${participant.isUser ? "text-fitness-orange" : "text-foreground"}`}>
                          {participant.name}
                        </h3>
                        {participant.isUser && (
                          <Badge className="bg-fitness-orange text-white">You</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {participant.days} workout days this month
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xl font-bold text-foreground">{participant.points}</p>
                    <p className="text-sm text-muted-foreground">points</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Available Leagues */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-fitness-blue" />
              Upcoming Leagues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableLeagues.map((league) => (
                <Card key={league.id} className="bg-background/30 border-border/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{league.name}</CardTitle>
                      <Badge className={getDifficultyColor(league.difficulty)}>
                        {league.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Starts:</span>
                      <span className="font-medium">{new Date(league.startDate).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Participants:</span>
                      <span className="font-medium">{league.participants}/{league.maxParticipants}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Entry Fee:</span>
                      <span className="font-medium">{league.entryFee}</span>
                    </div>
                    
                    <div className="text-sm">
                      <span className="text-muted-foreground">Prize: </span>
                      <span className="font-medium text-fitness-green">{league.prize}</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-fitness text-white hover:opacity-90"
                      disabled={league.participants >= league.maxParticipants}
                    >
                      {league.participants >= league.maxParticipants ? "Full" : "Join League"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* League Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-fitness-orange/20">
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 text-fitness-orange mx-auto mb-2" />
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Leagues Won</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-fitness-blue/20">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 text-fitness-blue mx-auto mb-2" />
              <p className="text-2xl font-bold">7</p>
              <p className="text-sm text-muted-foreground">Total Leagues</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-fitness-green/20">
            <CardContent className="p-4 text-center">
              <Zap className="h-8 w-8 text-fitness-green mx-auto mb-2" />
              <p className="text-2xl font-bold">340</p>
              <p className="text-sm text-muted-foreground">Points Earned</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-fitness-purple/20">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-fitness-purple mx-auto mb-2" />
              <p className="text-2xl font-bold">43%</p>
              <p className="text-sm text-muted-foreground">Win Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-card border-fitness-green/20">
          <CardContent className="p-6 text-center">
            <Timer className="h-12 w-12 text-fitness-green mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-foreground">Create Custom League</h3>
            <p className="text-muted-foreground mb-4">Start a private league with your AI training partners</p>
            <Button className="bg-gradient-fitness text-white">
              Create Custom League
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leagues;
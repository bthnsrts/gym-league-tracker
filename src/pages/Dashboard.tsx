import { useState, useEffect } from "react";
import StatsCard from "@/components/StatsCard";
import WorkoutForm from "@/components/WorkoutForm";
import { Calendar, Clock, Dumbbell, Heart, Trophy, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WorkoutData {
  date: string;
  weightliftingMinutes: number;
  cardioMinutes: number;
}

const Dashboard = () => {
  const [workouts, setWorkouts] = useState<WorkoutData[]>([]);

  // Load initial mock data
  useEffect(() => {
    const mockWorkouts: WorkoutData[] = [
      { date: "2024-01-15", weightliftingMinutes: 45, cardioMinutes: 20 },
      { date: "2024-01-17", weightliftingMinutes: 60, cardioMinutes: 15 },
      { date: "2024-01-19", weightliftingMinutes: 50, cardioMinutes: 25 },
      { date: "2024-01-22", weightliftingMinutes: 40, cardioMinutes: 30 },
      { date: "2024-01-24", weightliftingMinutes: 55, cardioMinutes: 0 },
    ];
    setWorkouts(mockWorkouts);
  }, []);

  const handleWorkoutAdded = (workout: WorkoutData) => {
    setWorkouts(prev => [...prev, workout]);
  };

  // Calculate stats
  const totalDays = workouts.length;
  const totalWeightliftingMinutes = workouts.reduce((sum, w) => sum + w.weightliftingMinutes, 0);
  const totalCardioMinutes = workouts.reduce((sum, w) => sum + w.cardioMinutes, 0);
  const totalMinutes = totalWeightliftingMinutes + totalCardioMinutes;

  // Current month stats
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const currentMonthWorkouts = workouts.filter(w => {
    const workoutDate = new Date(w.date);
    return workoutDate.getMonth() === currentMonth && workoutDate.getFullYear() === currentYear;
  });
  const monthlyDays = currentMonthWorkouts.length;

  const recentWorkouts = workouts.slice(-5).reverse();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-fitness bg-clip-text text-transparent">
            Fitness Dashboard
          </h1>
          <p className="text-muted-foreground">Track your gym progress and stay motivated!</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Gym Days"
            value={totalDays}
            subtitle="All time"
            icon={<Calendar className="h-6 w-6" />}
            gradient
          />
          <StatsCard
            title="This Month"
            value={monthlyDays}
            subtitle="Days trained"
            icon={<TrendingUp className="h-6 w-6" />}
          />
          <StatsCard
            title="Weightlifting"
            value={`${totalWeightliftingMinutes}m`}
            subtitle="Total minutes"
            icon={<Dumbbell className="h-6 w-6" />}
          />
          <StatsCard
            title="Cardio"
            value={`${totalCardioMinutes}m`}
            subtitle="Total minutes"
            icon={<Heart className="h-6 w-6" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Workout Form */}
          <WorkoutForm onWorkoutAdded={handleWorkoutAdded} />

          {/* Recent Workouts */}
          <Card className="bg-gradient-card border-fitness-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Clock className="h-5 w-5 text-fitness-blue" />
                Recent Workouts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentWorkouts.length > 0 ? (
                  recentWorkouts.map((workout, index) => (
                    <div
                      key={`${workout.date}-${index}`}
                      className="flex justify-between items-center p-3 rounded-lg bg-background/30 border border-border/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-fitness-orange rounded-full"></div>
                        <span className="text-sm font-medium">
                          {new Date(workout.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        {workout.weightliftingMinutes > 0 && (
                          <span className="flex items-center gap-1">
                            <Dumbbell className="h-3 w-3" />
                            {workout.weightliftingMinutes}m
                          </span>
                        )}
                        {workout.cardioMinutes > 0 && (
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {workout.cardioMinutes}m
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-4">
                    No workouts logged yet. Start by adding your first workout!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Goal Card */}
        <Card className="bg-gradient-fitness">
          <CardContent className="p-6">
            <div className="flex items-center justify-between text-white">
              <div>
                <h3 className="text-lg font-semibold">Weekly Goal</h3>
                <p className="text-white/80">You've trained {monthlyDays} days this month! Keep it up! 🔥</p>
              </div>
              <Trophy className="h-8 w-8" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
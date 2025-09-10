import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calendar, BarChart3, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Progress = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Mock monthly data
  const monthlyData = [
    { month: "January", year: 2024, days: 12, weightlifting: 540, cardio: 240 },
    { month: "February", year: 2024, days: 15, weightlifting: 675, cardio: 300 },
    { month: "March", year: 2024, days: 18, weightlifting: 810, cardio: 360 },
    { month: "April", year: 2024, days: 14, weightlifting: 630, cardio: 280 },
    { month: "May", year: 2024, days: 20, weightlifting: 900, cardio: 400 },
    { month: "June", year: 2024, days: 16, weightlifting: 720, cardio: 320 },
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentMonthData = monthlyData.find(d => 
    d.month === months[selectedMonth] && d.year === selectedYear
  ) || { month: months[selectedMonth], year: selectedYear, days: 0, weightlifting: 0, cardio: 0 };

  const previousMonthData = monthlyData.find(d => 
    d.month === months[selectedMonth - 1] && d.year === selectedYear
  ) || { days: 0, weightlifting: 0, cardio: 0 };

  const calculateGrowth = (current: number, previous: number) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return Math.round(((current - previous) / previous) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-fitness bg-clip-text text-transparent">
            Progress Tracking
          </h1>
          <p className="text-muted-foreground">Monitor your monthly fitness journey</p>
        </div>

        {/* Month Selector */}
        <Card className="bg-gradient-card border-fitness-orange/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-fitness-orange" />
              Select Month & Year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {months.map((month, index) => (
                <Button
                  key={month}
                  variant={selectedMonth === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedMonth(index)}
                  className={selectedMonth === index ? "bg-gradient-fitness text-white" : ""}
                >
                  {month}
                </Button>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <Button
                variant={selectedYear === 2023 ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear(2023)}
                className={selectedYear === 2023 ? "bg-gradient-fitness text-white" : ""}
              >
                2023
              </Button>
              <Button
                variant={selectedYear === 2024 ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear(2024)}
                className={selectedYear === 2024 ? "bg-gradient-fitness text-white" : ""}
              >
                2024
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Month Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-fitness-orange/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Gym Days</p>
                  <p className="text-3xl font-bold text-foreground">{currentMonthData.days}</p>
                  <p className="text-xs text-fitness-green">
                    {calculateGrowth(currentMonthData.days, previousMonthData.days) > 0 ? "+" : ""}
                    {calculateGrowth(currentMonthData.days, previousMonthData.days)}% from last month
                  </p>
                </div>
                <div className="p-3 bg-gradient-fitness rounded-full shadow-glow">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-fitness-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Weightlifting</p>
                  <p className="text-3xl font-bold text-foreground">{currentMonthData.weightlifting}m</p>
                  <p className="text-xs text-fitness-green">
                    {calculateGrowth(currentMonthData.weightlifting, previousMonthData.weightlifting) > 0 ? "+" : ""}
                    {calculateGrowth(currentMonthData.weightlifting, previousMonthData.weightlifting)}% from last month
                  </p>
                </div>
                <div className="p-3 bg-fitness-blue rounded-full">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-fitness-green/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Cardio</p>
                  <p className="text-3xl font-bold text-foreground">{currentMonthData.cardio}m</p>
                  <p className="text-xs text-fitness-green">
                    {calculateGrowth(currentMonthData.cardio, previousMonthData.cardio) > 0 ? "+" : ""}
                    {calculateGrowth(currentMonthData.cardio, previousMonthData.cardio)}% from last month
                  </p>
                </div>
                <div className="p-3 bg-fitness-green rounded-full">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Year Overview */}
        <Card className="bg-gradient-card border-fitness-purple/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-fitness-purple" />
              {selectedYear} Year Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData
                .filter(data => data.year === selectedYear)
                .map((data, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/30 border border-border/20">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-gradient-fitness rounded-full"></div>
                    <span className="font-medium">{data.month}</span>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <span className="text-muted-foreground">
                      <span className="text-foreground font-medium">{data.days}</span> days
                    </span>
                    <span className="text-muted-foreground">
                      <span className="text-foreground font-medium">{data.weightlifting}m</span> lifting
                    </span>
                    <span className="text-muted-foreground">
                      <span className="text-foreground font-medium">{data.cardio}m</span> cardio
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Total Stats */}
        <Card className="bg-gradient-fitness">
          <CardContent className="p-6">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Total {selectedYear} Progress</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="text-3xl font-bold">{monthlyData.filter(d => d.year === selectedYear).reduce((sum, d) => sum + d.days, 0)}</p>
                  <p className="text-white/80">Total Gym Days</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{monthlyData.filter(d => d.year === selectedYear).reduce((sum, d) => sum + d.weightlifting, 0)}m</p>
                  <p className="text-white/80">Total Weightlifting</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{monthlyData.filter(d => d.year === selectedYear).reduce((sum, d) => sum + d.cardio, 0)}m</p>
                  <p className="text-white/80">Total Cardio</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;
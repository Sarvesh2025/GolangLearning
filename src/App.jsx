import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import { Calendar, CheckCircle2, Circle, Clock, Filter } from "lucide-react";

const App = () => {
  const initialData = [
    {
      Week: "Week 1",
      Focus: "Golang Basics",
      Day: "Day 1",
      Task: "Install and Set Up Go",
      Deadline: "Day 1",
    },
    {
      Week: "Week 1",
      Focus: "Golang Basics",
      Day: "Day 2",
      Task: "Learn Variables, Types, and Control Flow",
      Deadline: "Day 2",
    },
    {
      Week: "Week 1",
      Focus: "Golang Basics",
      Day: "Day 3",
      Task: "Master Functions, Arrays, Slices, Maps",
      Deadline: "Day 3",
    },
    {
      Week: "Week 1",
      Focus: "Golang Basics",
      Day: "Day 4",
      Task: "Understand Structs and Methods",
      Deadline: "Day 4",
    },
    {
      Week: "Week 1",
      Focus: "Golang Basics",
      Day: "Day 5-6",
      Task: "Learn Concurrency: Goroutines, Channels",
      Deadline: "Day 6",
    },
    {
      Week: "Week 1",
      Focus: "Golang Basics",
      Day: "Day 7",
      Task: "Practice with Small Exercises",
      Deadline: "Day 7",
    },
    {
      Week: "Week 2",
      Focus: "Backend Development Essentials",
      Day: "Day 8-9",
      Task: "Learn net/http for Web Servers",
      Deadline: "Day 9",
    },
    {
      Week: "Week 2",
      Focus: "Backend Development Essentials",
      Day: "Day 10",
      Task: "Build Middleware for Logging, Handling",
      Deadline: "Day 10",
    },
    {
      Week: "Week 2",
      Focus: "Backend Development Essentials",
      Day: "Day 11",
      Task: "Use Gin or Fiber for Routing",
      Deadline: "Day 11",
    },
    {
      Week: "Week 2",
      Focus: "Backend Development Essentials",
      Day: "Day 12",
      Task: "Implement Error Handling",
      Deadline: "Day 12",
    },
    {
      Week: "Week 2",
      Focus: "Backend Development Essentials",
      Day: "Day 13",
      Task: "Master Go Modules, Dependency Management",
      Deadline: "Day 13",
    },
    {
      Week: "Week 2",
      Focus: "Backend Development Essentials",
      Day: "Day 14",
      Task: "Build a To-Do List API",
      Deadline: "Day 14",
    },
    {
      Week: "Week 3",
      Focus: "Database Integration & Auth",
      Day: "Day 15-16",
      Task: "Database Basics with Go (PostgreSQL)",
      Deadline: "Day 16",
    },
    {
      Week: "Week 3",
      Focus: "Database Integration & Auth",
      Day: "Day 17",
      Task: "Use GORM for ORM",
      Deadline: "Day 17",
    },
    {
      Week: "Week 3",
      Focus: "Database Integration & Auth",
      Day: "Day 18",
      Task: "Implement Authentication with JWT",
      Deadline: "Day 18",
    },
    {
      Week: "Week 3",
      Focus: "Database Integration & Auth",
      Day: "Day 19-20",
      Task: "Build a Blog API with User Authentication",
      Deadline: "Day 20",
    },
    {
      Week: "Week 4",
      Focus: "Full Project and Deployment",
      Day: "Day 21-22",
      Task: "Build a Real-World Project (E-Commerce)",
      Deadline: "Day 22",
    },
    {
      Week: "Week 4",
      Focus: "Full Project and Deployment",
      Day: "Day 23-24",
      Task: "Write Unit and Integration Tests",
      Deadline: "Day 24",
    },
    {
      Week: "Week 4",
      Focus: "Full Project and Deployment",
      Day: "Day 25-26",
      Task: "Dockerize the Application",
      Deadline: "Day 26",
    },
    {
      Week: "Week 4",
      Focus: "Full Project and Deployment",
      Day: "Day 27-28",
      Task: "Deploy to Cloud (AWS, Render, DigitalOcean)",
      Deadline: "Day 28",
    },
  ];

  const [tasks, setTasks] = useState(
    initialData.map((task) => ({
      ...task,
      completed: false,
      id: Math.random().toString(36).substr(2, 9),
    }))
  );

  const [filter, setFilter] = useState("all"); // all, completed, pending
  const [weekFilter, setWeekFilter] = useState("all");

  const getProgressPercentage = () => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    return Math.round((completedTasks / tasks.length) * 100);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const weekMatch = weekFilter === "all" || task.Week === weekFilter;
    const statusMatch =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);
    return weekMatch && statusMatch;
  });

  const weeks = [...new Set(tasks.map((task) => task.Week))];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Golang Backend Development Roadmap
          </CardTitle>
          <div className="flex justify-between items-center pt-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                className="border rounded-md px-2 py-1"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Tasks</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
              <select
                className="border rounded-md px-2 py-1 ml-2"
                value={weekFilter}
                onChange={(e) => setWeekFilter(e.target.value)}
              >
                <option value="all">All Weeks</option>
                {weeks.map((week) => (
                  <option key={week} value={week}>
                    {week}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">
                Progress: {getProgressPercentage()}%
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {weeks.map((week) => {
              const weekTasks = filteredTasks.filter(
                (task) => task.Week === week
              );
              if (weekFilter !== "all" && week !== weekFilter) return null;
              if (weekTasks.length === 0) return null;

              return (
                <div key={week} className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <span>{week}</span>
                    <span className="text-sm font-normal text-gray-500">
                      ({weekTasks.filter((t) => t.completed).length}/
                      {weekTasks.length} completed)
                    </span>
                  </h3>
                  <div className="grid gap-4">
                    {weekTasks.map((task) => (
                      <div
                        key={task.id}
                        className={`p-4 rounded-lg border ${
                          task.completed
                            ? "bg-green-50 border-green-200"
                            : "bg-white hover:bg-gray-50"
                        } transition-colors duration-200`}
                      >
                        <div className="flex items-start space-x-4">
                          <Checkbox
                            checked={task.completed}
                            onCheckedChange={() => toggleTask(task.id)}
                          />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4
                                className={`font-medium ${
                                  task.completed
                                    ? "line-through text-gray-500"
                                    : ""
                                }`}
                              >
                                {task.Task}
                              </h4>
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <Clock className="h-4 w-4" />
                                <span>{task.Day}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              Focus: {task.Focus}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;

"use client"

import * as React from "react"
import { Slider } from "@/components/ui/Slider"

interface DistanceElevationSliderProps {
  onValueChange?: (value: number) => void
}

export function DistanceElevationSlider({ onValueChange }: DistanceElevationSliderProps) {
  const [value, setValue] = React.useState(50)

  const handleValueChange = (newValue: number[]) => {
    setValue(newValue[0])
    onValueChange?.(newValue[0])
  }

  return (
    <div className="w-full max-w-md">
      <div className="relative pt-6 pb-2">
        <div className="absolute inset-0 flex justify-between items-start pointer-events-none z-10">
          <span className="text-sm font-medium text-foreground">Distance</span>
          <span className="text-sm font-medium text-foreground">Elevation</span>
        </div>
        <div className="absolute inset-x-0 top-8 bottom-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
        <Slider
          value={[value]}
          onValueChange={handleValueChange}
          max={100}
          step={1}
          className="relative z-20 [&_[role=slider]]:h-8 [&_[role=slider]]:w-8"
        />
        <div
          className="absolute top-8 bottom-4 w-8 bg-white rounded-full shadow-md transition-all duration-200 flex items-center justify-center font-medium text-sm z-30"
          style={{ left: `calc(${value}% - 16px)` }}
        >
          {value}%
        </div>
      </div>
      <div className="flex justify-between text-sm text-muted-foreground mt-1">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  )
}

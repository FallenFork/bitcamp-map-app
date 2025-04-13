"use client"

import * as React from "react"
import * as RadixSlider from "@radix-ui/react-slider"

interface DistanceElevationSliderProps {
  onValueChange?: (value: number) => void
}

function DistanceElevationSlider({ onValueChange }: DistanceElevationSliderProps) {
  const [value, setValue] = React.useState(50)

  const handleValueChange = (newValue: number[]) => {
    setValue(newValue[0])
    onValueChange?.(newValue[0])
    console.log(newValue[0])
  }

  return (
    <div className="w-full max-w-md">
      <div className="relative pt-6 pb-2">
        <div className="absolute inset-0 flex justify-between items-start pointer-events-none z-10">
          <span className="text-gray-600 mb-4">Distance</span>
          <span className="text-gray-600 mb-4">Elevation</span>
        </div>

        {/* Track background */}
        <div className="absolute inset-x-0 top-8 bottom-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />

        {/* Slider with bubble inside Thumb */}
        <RadixSlider.Root
          value={[value]}
          onValueChange={handleValueChange}
          max={100}
          step={1}
          className="relative z-20 flex items-center h-10 w-full touch-none select-none"
        >
          <RadixSlider.Track className="bg-transparent relative h-2 w-full rounded-full">
            <RadixSlider.Range className="absolute h-full bg-transparent" />
          </RadixSlider.Track>

          <RadixSlider.Thumb
            className="group relative block w-6 h-6 bg-white border border-gray-300 shadow-md rounded-full focus:outline-none"
            aria-label="Slider thumb"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-sm font-medium rounded-md shadow-md z-30 whitespace-nowrap">
              {value}%
            </div>
          </RadixSlider.Thumb>
        </RadixSlider.Root>
      </div>

      {/* Bottom labels */}
      <div className="flex justify-between text-sm text-muted-foreground mt-1">
      </div>
    </div>
  )
}
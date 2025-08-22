import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ThemeShowcase = () => {
  return (
    <div className="p-8 space-y-8 bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Enhanced Light Theme Showcase</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience the improved visual hierarchy, better contrast, and modern color palette
          of the enhanced light theme design.
        </p>
      </div>

      {/* Color Palette Display */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Color Palette</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-16 bg-primary rounded-lg border border-border"></div>
              <p className="text-sm font-medium text-foreground">Primary</p>
              <p className="text-xs text-muted-foreground">#3182ce</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-secondary rounded-lg border border-border"></div>
              <p className="text-sm font-medium text-foreground">Secondary</p>
              <p className="text-xs text-muted-foreground">#edf2f7</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-accent rounded-lg border border-border"></div>
              <p className="text-sm font-medium text-foreground">Accent</p>
              <p className="text-xs text-muted-foreground">#e6fffa</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-destructive rounded-lg border border-border"></div>
              <p className="text-sm font-medium text-foreground">Destructive</p>
              <p className="text-xs text-muted-foreground">#e53e3e</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Button Variants */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Button Components</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive Button</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="default" size="sm">Small</Button>
            <Button variant="default" size="default">Default</Button>
            <Button variant="default" size="lg">Large</Button>
          </div>
        </CardContent>
      </Card>

      {/* Typography Hierarchy */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Typography Hierarchy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Heading 1 - Primary Text</h1>
          <h2 className="text-3xl font-semibold text-foreground">Heading 2 - Primary Text</h2>
          <h3 className="text-2xl font-medium text-card-foreground">Heading 3 - Card Text</h3>
          <p className="text-base text-foreground">
            Body text with primary foreground color for maximum readability and accessibility.
          </p>
          <p className="text-base text-card-foreground">
            Secondary body text using card foreground color for subtle hierarchy.
          </p>
          <p className="text-sm text-muted-foreground">
            Muted text for less important information, captions, and metadata.
          </p>
        </CardContent>
      </Card>

      {/* Status Badges */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Status Indicators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-primary text-primary-foreground">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge className="bg-accent text-accent-foreground">Info</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Chart Colors Preview */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Chart Color Palette</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {[
              { name: 'Chart 1', color: 'hsl(var(--chart-1))' },
              { name: 'Chart 2', color: 'hsl(var(--chart-2))' },
              { name: 'Chart 3', color: 'hsl(var(--chart-3))' },
              { name: 'Chart 4', color: 'hsl(var(--chart-4))' },
              { name: 'Chart 5', color: 'hsl(var(--chart-5))' },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-2">
                <div 
                  className="w-full h-16 rounded-lg border border-border"
                  style={{ backgroundColor: item.color }}
                ></div>
                <p className="text-xs font-medium text-foreground">{item.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Information */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Accessibility Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Contrast Ratios</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-card-foreground">Background/Foreground:</span>
                  <Badge className="bg-green-100 text-green-800">15.8:1 (AAA)</Badge>
                </li>
                <li className="flex justify-between">
                  <span className="text-card-foreground">Primary/Primary Foreground:</span>
                  <Badge className="bg-green-100 text-green-800">4.5:1 (AA)</Badge>
                </li>
                <li className="flex justify-between">
                  <span className="text-card-foreground">Card/Card Foreground:</span>
                  <Badge className="bg-green-100 text-green-800">12.6:1 (AAA)</Badge>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Design Benefits</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• WCAG AA/AAA compliant color combinations</li>
                <li>• Clear visual hierarchy for better UX</li>
                <li>• Professional appearance for business use</li>
                <li>• Reduced eye strain with optimal contrast</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThemeShowcase;

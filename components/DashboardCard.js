import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const DashboardCard = ({
    title,
    description,
    value,
    change,
    changeType = "positive",
    icon,
    children,
    className = "",
    size = "default",
}) => {
    const sizeClasses = {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
    }

    const changeColors = {
        positive: "text-secondary",
        negative: "text-destructive",
        neutral: "text-muted-foreground",
    }

    return (
        <Card
            className={`bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${className}`}
        >
            <CardHeader className={`${sizeClasses[size]} pb-2`}>
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            {title}
                        </CardTitle>
                        {value && <div className="text-2xl font-bold text-foreground">{value}</div>}
                    </div>
                    {icon && <div className="h-8 w-8 text-muted-foreground">{icon}</div>}
                </div>
                {change && (
                    <div className={`text-xs ${changeColors[changeType]} flex items-center gap-1`}>
                        {changeType === "positive" && (
                            <svg
                                className="h-3 w-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 17l9.2-9.2M17 17V7H7"
                                />
                            </svg>
                        )}
                        {changeType === "negative" && (
                            <svg
                                className="h-3 w-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 7l-9.2 9.2M7 7v10h10"
                                />
                            </svg>
                        )}
                        {change}
                    </div>
                )}
                {description && (
                    <CardDescription className="text-xs text-muted-foreground">
                        {description}
                    </CardDescription>
                )}
            </CardHeader>
            {children && (
                <CardContent className={`${sizeClasses[size]} pt-0`}>{children}</CardContent>
            )}
        </Card>
    )
}

// Specialized card variants
export const MetricCard = ({ title, value, change, changeType, icon }) => (
    <DashboardCard
        title={title}
        value={value}
        change={change}
        changeType={changeType}
        icon={icon}
        size="default"
    />
)

export const ChartCard = ({ title, description, children, className }) => (
    <DashboardCard
        title={title}
        description={description}
        className={`col-span-2 ${className}`}
        size="lg"
    >
        {children}
    </DashboardCard>
)

export const ProgressCard = ({ title, value, max, percentage, color = "primary" }) => {
    const colorClasses = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        accent: "bg-accent",
        success: "bg-secondary",
        warning: "bg-accent",
        danger: "bg-destructive",
    }

    return (
        <DashboardCard title={title} value={`${value}/${max}`}>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{percentage}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                    <div
                        className={`h-2 rounded-full transition-all duration-500 ${colorClasses[color]}`}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
        </DashboardCard>
    )
}

export const StatCard = ({ title, value, subtitle, trend, trendValue }) => (
    <DashboardCard
        title={title}
        value={value}
        change={trendValue}
        changeType={trend}
        description={subtitle}
    />
)

export default DashboardCard

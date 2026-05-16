import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-900/50 text-red-200 border border-red-500/50 rounded-lg text-sm font-mono">
          <p className="font-bold">System Failure</p>
          <p>{this.state.error?.message || "Unknown Error"}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

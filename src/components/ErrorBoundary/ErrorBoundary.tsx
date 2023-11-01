import React, { PropsWithChildren, ReactElement } from 'react';

type ErrorBoundaryProps = {
  fallback: ReactElement;
  children: ReactElement | PropsWithChildren | PropsWithChildren[];
};

type ErrorBoundaryState = { hasError: boolean };

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo.componentStack);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;

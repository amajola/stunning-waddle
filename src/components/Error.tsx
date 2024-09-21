import React from "react";

interface ErrorScreenProps {
  message?: string;
  onRetry?: () => void;
  onHome?: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({
  message = "Oops! Something went wrong.",
  onRetry,
  onHome,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-gray-600 mb-8">{message}</p>
        <div className="flex justify-center space-x-4">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Retry
            </button>
          )}
          {onHome && (
            <button
              onClick={onHome}
              className="px-4 py-2 text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Go Home
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;

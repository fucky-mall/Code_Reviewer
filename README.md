# Code Review AI Application

A React-based application that integrates with an AI-powered API to review and analyze JavaScript code. The application provides a code editor on the left side and displays the AI-generated review on the right side. It also includes a loading state while fetching the review.

## Features

- **Code Editor**: Write and edit JavaScript code in a real-time syntax-highlighted editor.
- **AI-Powered Code Review**: Submit your code for review and get detailed feedback from the AI.
- **Loading State**: A sleek loading animation appears while the AI processes your code.
- **Markdown Support**: The review response supports Markdown formatting, including code blocks, bold, italics, and lists.
- **Responsive Design**: The layout is designed to work seamlessly on different screen sizes.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Prism.js**: Syntax highlighting for the code editor and review section.
- **Axios**: HTTP client for making API requests.
- **Marked**: Markdown parser for formatting the review response.
- **DOMPurify**: Sanitizes HTML to prevent XSS attacks.
- **CSS**: Custom styles for the layout, loading animation, and responsive design.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/code-review-ai-app.git
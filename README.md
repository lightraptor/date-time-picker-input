# Input DateTime Picker

## Project Overview

`Input DateTime Picker` is a modern and customizable React component designed to provide an intuitive and flexible way for users to select both date and time. Built using the latest technologies like React, TailwindCSS, and date-fns, this project ensures high usability and aesthetic appeal, making it ideal for any modern web application.

---

## Features

- **Date and Time Selection**: Combines date and time picking into a single, user-friendly component.
- **Customizable UI**: Built with TailwindCSS, allowing easy styling to match your project’s design.
- **Responsive Design**: Ensures the component works seamlessly across all devices.
- **Accessible**: Fully keyboard and screen-reader accessible.
- **Lightweight and Fast**: Optimized for performance, utilizing only necessary dependencies.
- **Built-in Validation**: Powered by `react-hook-form` and `zod` for validation.

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:

- Node.js (v16 or newer)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/input-datetime-picker.git
   cd input-datetime-picker
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## Usage

Here is an example of how to integrate the DateTime Picker into your project:

```tsx
import { useState } from 'react';
import DateTimePickerInput from './components/DateTimePickerInput';

const App = () => {
  const [dateTime, setDateTime] = useState<string | undefined>();

  return (
    <div className="app-container">
      <h1>Select Date and Time</h1>
      <DateTimePickerInput
        value={dateTime}
        onChange={(newValue) => {
          setDateTime(newValue);
          console.log('Selected DateTime:', newValue);
        }}
      />
    </div>
  );
};

export default App;
```

---

## Scripts

- **`npm run dev`**: Starts the development server with hot module reloading.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Lints the codebase using ESLint.

---

## Technologies Used

- **React**: Core library for building user interfaces.
- **Vite**: Fast development environment and build tool.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Radix UI**: Accessible UI primitives.
- **date-fns**: Library for date manipulation.
- **Zod**: Schema validation for better type safety.
- **React Hook Form**: Simplified form management.

---

## Folder Structure

```
input-datetime-picker/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── styles/      # Global styles
│   ├── utils/       # Utility functions
│   ├── App.tsx      # Main application
│   └── index.tsx    # Entry point
├── package.json     # Project metadata and scripts
└── vite.config.ts   # Vite configuration
```

---

## Contributing

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

Special thanks to the contributors of the following libraries:
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [date-fns](https://date-fns.org/)
- [Radix UI](https://radix-ui.com/)

---

Happy coding! 🚀


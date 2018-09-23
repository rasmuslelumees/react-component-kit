# React UI kit
My personal React UI kit for awesome components.

## Installation 🛠

Using NPM:

```
npm i rasmus-react-component-kit
```

Using Yarn:

```
yarn add rasmus-react-component-kit
```

## Usage 🍻

Use the UserCard component like any other React component:
```
import React from 'react';
import { render } from "react-dom";
import { UserCard } from "./lib";

const App = () => (
    <div>
        <UserCard
            name='Rasmus Lelumees'
            avatarUrl='https://avatars0.githubusercontent.com/u/7032517?s=460&v=4'
            statusText='Online | 14h'
            statusColor='#5ad045'
        />
    </div>
);

render(<App />, document.getElementById("root"));
```

#### I find it to be good to have a thought process documented so here I go.

First things is to identify the correct components with their behavior.
(goal is to try to keep the core components pure)

For styling I'll be using tailwind.

### Pages I'll need

-   Projects List
-   Projects Create
-   Project View (opt)

so

-   /
    -   /projects
        -   / (List)
        -   /new (Create)
        -   /:id (View)

### Components I initially think I'll need

-   ProjectListCard (Pure)
    -   name
    -   desc
    -   imageSrc

Not sure about the Wizard.
Don't want to overengineer it by creating a custom reusable comopnent.
I can't use third party libraries so I'll simply be using conditional rendering for the separate stages.

I was thinking about using react-router. A router outlet paired with a react context for state management and progress tracking which I have realised would add extra challenges

(a challenge example: it would be based on path routing so I'd have to validate each stage since I could just type `/projects/new/notTheFirstStage` which would be invalid since I planned on validating before stage change)

### Project Structuring

For this project I'll be using a simpler structure:
(for this size I could simply have folders for each file type but this feels a little more professional)

-   pages
    -   Projects
        -   types
        -   components
        -   hooks
        -   pages
            -   ...
-   shared
    -   types
    -   components
    -   hooks
        (each with its own index.ts)

For bigger projects I like to use this "bulletproof-react" structure:
https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md

### Styling

Since UI libraries are allowed, I am going to be using Mantine since I have used that before and had a great experience with it.

Will also be using tailwind for other styles.

### Fake backend?

A quick google search resulted in me going to give this one a shot. https://github.com/typicode/json-server

It has query conditions as well which is going to be perfect for the extra tasks.

The only concern is the license. "Use Limitation: 2 users". I guess technically I am the "user", and the ones checking/running my solution will only be the users of the "user"'s project. idk.

## If this is a concern or a blocker, please contact me and I'll replace this dependency

### Extra Extra task

If I'll have time, I can potentially improve on the CreateProjectPage colleague adder section.
Could be a cool addition like saving each colleague as well and then requesting them for autocompletion?

### Explanations

#### Setup Stuff commit

contains a bunch of setup environment setup like

-   Absolute imports
-   Tailwind setup (fix)
-   Prettier config
-   Tanstack useQuery setup

#### Mantine

I have removed mantine and have decided to use "raw" tailwind. Since mantine migrated to postcss (have not used this version) they seem to work funny together with tailwind. I have looked at other libraries but decided it will be way faster to just give the components a little styling by myself even if it looks more basic.

### Destructure

I am aware of destructuring in js like

```javascript
const MyComponent = ({ project, ...props }) => {};
```

but I got used to the practice of just using props argument and destructuring only when it is really necessary and would improve readability much more since it is more efficient to just access the already existing object properties than to just create a new one

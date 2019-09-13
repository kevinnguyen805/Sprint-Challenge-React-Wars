# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
React JS allows us to use components to create scalable UI. More specifically, React utilizes components and the virtual DOM to add content to the browser when needed and does not rerender the entire page when this process occurs.


1. What does it mean to think in react?
To think in React means one understands how to reuse components to create content and that data flows only one way (from the parent to child) - never laterally. In essence, this creates a 'component tree' where everything is linked hierarchically. 


1. Describe state.
State is data that can change. State allows current data to be stored and further updated once an element on the UI side triggers a change. 


1. Describe props.
Props are empty objects that can be used to pass data down from the parent component to the child component by adding it into the JSX section. 


1. What are side effects, and how do you sync effects in a React component to state or prop changes?
Side effects are anything that happen outside of the function, including console.log or grabbing API data/timers. Side effects, paired with states, allow us to grab data outside of the function and update our current data (state) with it. To sync props with side effects, a 'useState' function takes in the API data, updating the current 'state' which can be translated to updated UI content. 

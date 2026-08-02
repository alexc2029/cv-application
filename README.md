# CV Application

Aside from getting more comfortable with react state and props, I have also encountered and fixed an interesting bug. My form's onSubmit would not fire when you pressed the "submit" button, but would fire if you pressed it again, in its "edit" state.

That was because the button was changing its state before the submit event could fire, so the button would be gone in the meantime. I fixed this by adding a zero delay setTimeout to the function that toggles the button's state, which pushes it to the back of the queue and lets the events fire first.

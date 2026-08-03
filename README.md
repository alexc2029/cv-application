# CV Application

This is my first react project. It is as minimal as possible in aspects such as styling, its purpose being to
get more comfortable with react state and props. I have also encountered and fixed an interesting bug. My form's onSubmit would not fire when you pressed the "submit" button, but would fire if you pressed it again, in its "edit" state.

That was because the button was changing its attributes before the submit event could fire, so there would be no submit button found by the time the event fired. I fixed this by adding a zero delay setTimeout to the function that toggles the button's state, which pushes it to the back of the queue and lets the events fire first. In the meantime I have refactored that button into 2 completely separate buttons, however that fix is still necessary after testing.

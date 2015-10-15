# DriveIn

Drive-In Script for the Browser

There are numerous types of input elements in HTML such as text, number, button, range, time and calendar. Unfortunately, not all types of input elements are available on all browsers, they mostly look different on different browsers and platforms, some are bit of an overkill (e. g. the calendar for a simple date input), and some require numerous clicks just for a common action.

As different as input elements are, they share a few common properties:

- Present a selection
- Navigate in a selection
- Choose from or input a selection.

The Drive-In script starts from this observation and realizes input elements based on the above-mentioned functions. In terms of HTML, Drive-In consists of a group of interrelated, mainly editable HTML elements which handle key, click, and scroll events.

On a scripting level, Drive-In relies on three functions, a programmer needs to supply for each editable field:

- A show function returning the text as it will be displayed
- A put function called on user input whose entry a programmer has to parse
- A push function telling the number of steps a field needs to scroll forth or back

To set-up the input element, these functions are then passed to the Drive-In script.

Drive-In also includes the concept of alternative representations, which means that a user can switch between different representations such as coordinates in decimal degrees or degrees, minutes and seconds. Switching is realized by shift clicking into the entry fields.

It turns out that numerous input elements can be realized with the Drive-In script. Look at the following examples accompanying this script:

- Date and time picking
- Geographic coordinates input with different representations
- Color chooser with different color systems
- Number wheel as an alternative form of a slider
- Selection from a (circular) list
- Selection from a hierarchical menu
- Any kind of unit converter
- Binary and hexadecimal editor

Since all fields created by Drive-In are HTML elements, they can completely be formatted by CSS.

Drive-In runs on all modern browsers and devices. However, it is most comfortably used with a mouse pad or a mouse wheel.

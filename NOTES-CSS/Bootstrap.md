# Bootstrap CSS: A Comprehensive Guide

Having experience with React and Material-UI is a great foundation! Bootstrap CSS will feel familiar in its component-based approach, but with a different set of classes and a more direct CSS implementation. Let's dive in from the beginning.

## What is Bootstrap?

Bootstrap is the most popular CSS framework for developing responsive, mobile-first websites. It's a free and open-source collection of CSS and JavaScript (jQuery and Popper.js) tools for creating common web components and layouts.

### Why use Bootstrap?

*   **Rapid Development:** Speeds up development by providing ready-made components and styles.
*   **Responsiveness:** Built from the ground up to be responsive, adapting layouts to different screen sizes.
*   **Consistency:** Ensures a consistent look and feel across different browsers and devices.
*   **Community & Documentation:** Large community, extensive documentation, and many resources available.
*   **Customization:** Highly customizable through Sass variables, allowing you to tailor it to your brand.

## Getting Started

There are several ways to include Bootstrap in your project:

### 1. CDN (Content Delivery Network) - Quickest Way

This is the easiest way to get started, especially for quick prototypes or learning.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap CDN Example</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>

    <h1>Hello, Bootstrap!</h1>
    <button class="btn btn-primary">My Button</button>

    <!-- Bootstrap JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>
```

*   **`bootstrap.min.css`**: The minified CSS file.
*   **`bootstrap.bundle.min.js`**: Includes all Bootstrap's JavaScript plugins and Popper.js (for tooltips, popovers).

### 2. npm (Node Package Manager) - For Modern Projects (React, etc.)

If you're in a React project, this is the standard approach.

```bash
npm install bootstrap
```

Then, in your main JavaScript file (e.g., `src/index.js` or `src/App.js` in React):

```javascript
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Optionally import Bootstrap JavaScript (if you need interactive components like modals, carousels)
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Or specific components: import 'bootstrap/js/dist/modal';
```

### 3. Download & Self-Host

You can download the compiled CSS and JS, or the source Sass files, from the official Bootstrap website and host them locally. This gives you full control.

## Core Concepts

### 1. Mobile-First Design

Bootstrap is built with a mobile-first philosophy. This means styles for smaller screens are applied by default, and then overridden for larger screens using media queries.

### 2. Responsive Breakpoints

Bootstrap uses a set of predefined breakpoints to define different screen sizes. These are crucial for understanding how the grid system and utility classes work.

*   `xs` (extra-small): <576px (handled by default, no specific prefix)
*   `sm` (small): ≥576px
*   `md` (medium): ≥768px
*   `lg` (large): ≥992px
*   `xl` (extra-large): ≥1200px
*   `xxl` (extra-extra-large): ≥1400px

You'll see these prefixes used extensively with grid classes (e.g., `col-md-6`) and utility classes (e.g., `p-sm-3`, `d-lg-block`).

### 3. Containers

Containers are the most basic layout element in Bootstrap. They center and horizontally pad your content.

*   **`.container`**: A fixed-width container that changes its `max-width` at each responsive breakpoint.
*   **`.container-fluid`**: A full-width container, spanning the entire width of the viewport.
*   **`.container-{breakpoint}`**: Specifies a full-width container until the given breakpoint, then it becomes fixed-width. E.g., `.container-md` means it's fluid below `md` breakpoint, then fixed above.

Example:
```html
<div class="container">
    <!-- Content will be here, with max-width -->
    This content will be centered and have a max-width.
</div>

<div class="container-fluid">
    <!-- Content will span full width -->
    This content will span the full width of the viewport.
</div>
```

### 4. Grid System

The Bootstrap grid system is the most powerful feature for creating responsive page layouts. It's based on a 12-column layout.

*   **Rows (`.row`)**: Must be placed inside a `container` (or `container-fluid`). Rows are horizontal groups of columns. They have negative margins to offset the padding of columns.
*   **Columns (`.col` classes)**: Direct children of `.row`. They specify how much width a column should take up out of the 12 available columns.

**Basic Grid Structure:**

```html
<div class="container">
    <div class="row">
        <div class="col-6">Column 1 (6 of 12)</div>
        <div class="col-6">Column 2 (6 of 12)</div>
    </div>
    <div class="row">
        <div class="col-4">Column 3 (4 of 12)</div>
        <div class="col-8">Column 4 (8 of 12)</div>
    </div>
</div>
```

**Responsive Grids:** You can specify different column widths for different breakpoints.

*   `col-{breakpoint}-{number}`: e.g., `col-md-6` means "on medium screens and up, take 6 columns."
*   `col-{breakpoint}`: Allows columns to auto-size.

Example: Two columns that stack on small screens and go side-by-side on medium screens and up.
```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6">
            Column 1 (full width on small, half width on medium and up)
        </div>
        <div class="col-12 col-md-6">
            Column 2 (full width on small, half width on medium and up)
        </div>
    </div>
</div>
```

**Auto-Layout Columns:**

*   `col`: Automatically distributes width equally among siblings.
*   `col-{breakpoint}`: Automatically distributes width equally on that breakpoint and up.

```html
<div class="container">
    <div class="row">
        <div class="col">1 of 3</div>
        <div class="col">2 of 3</div>
        <div class="col">3 of 3</div>
    </div>
    <div class="row">
        <div class="col-sm">1 of 2 (auto-width on small and up)</div>
        <div class="col-sm">2 of 2</div>
    </div>
</div>
```

**Offsetting Columns:** Move columns to the right using `offset-{breakpoint}-{number}` classes.

```html
<div class="container">
    <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
    </div>
</div>
```

**Nesting Columns:** You can nest `row`s inside `col`s. Remember, a nested `row` also has 12 columns available within its parent `col`.

```html
<div class="container">
    <div class="row">
        <div class="col-sm-9">
            Level 1: .col-sm-9
            <div class="row">
                <div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
                <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
            </div>
        </div>
    </div>
</div>
```

## Utility Classes

Bootstrap is rich with utility classes for quickly applying common styles without writing custom CSS. Think of them like atomic CSS classes.

### 1. Spacing (Margin & Padding)

Classes for `margin` (`m`) and `padding` (`p`) in the format `{property}{sides}-{size}` or `{property}{sides}-{breakpoint}-{size}`.

*   **`property`**: `m` for margin, `p` for padding.
*   **`sides`**:
    *   `t`: top
    *   `b`: bottom
    *   `s`: start (left in LTR)
    *   `e`: end (right in LTR)
    *   `x`: horizontal (left & right)
    *   `y`: vertical (top & bottom)
    *   (none): all 4 sides
*   **`size`**: 0-5 for `rem` based spacing, `auto` for margin-auto.
    *   `0`: 0
    *   `1`: 0.25rem
    *   `2`: 0.5rem
    *   `3`: 1rem (default)
    *   `4`: 1.5rem
    *   `5`: 3rem
    *   `auto`: e.g., `mx-auto` for horizontal centering of block elements.

Example:
```html
<div class="p-3 bg-light">This div has 1rem padding on all sides.</div>
<div class="mt-5 bg-info">This div has 3rem top margin.</div>
<div class="px-4 py-2 bg-warning">Horizontal padding 1.5rem, vertical padding 0.5rem.</div>
<div class="mx-auto my-3 bg-dark text-white" style="width: 200px;">Centered block with vertical margin.</div>
```

### 2. Display

Control the `display` property.
*   `d-none`: `display: none;`
*   `d-inline`: `display: inline;`
*   `d-inline-block`: `display: inline-block;`
*   `d-block`: `display: block;`
*   `d-flex`: `display: flex;`
*   `d-grid`: `display: grid;`

And their responsive variants: `d-{breakpoint}-{value}`.
Example:
```html
<div class="d-none d-md-block">Hidden on small screens, block on medium and up.</div>
<div class="d-flex justify-content-center align-items-center">Flex container</div>
```

### 3. Flexbox Utilities

When using `d-flex` or `d-{breakpoint}-flex`, you can use these classes:

*   **Direction:**
    *   `flex-row` (default)
    *   `flex-row-reverse`
    *   `flex-column`
    *   `flex-column-reverse`
*   **Justify Content (main axis):**
    *   `justify-content-start`
    *   `justify-content-end`
    *   `justify-content-center`
    *   `justify-content-between`
    *   `justify-content-around`
    *   `justify-content-evenly`
*   **Align Items (cross axis):**
    *   `align-items-start`
    *   `align-items-end`
    *   `align-items-center`
    *   `align-items-baseline`
    *   `align-items-stretch`
*   **Align Self (individual item on cross axis):**
    *   `align-self-start`
    *   `align-self-end`
    *   `align-self-center`
    *   `align-self-baseline`
    *   `align-self-stretch`
*   **Wrap:**
    *   `flex-wrap`
    *   `flex-nowrap` (default)
    *   `flex-wrap-reverse`
*   **Order:** `order-{number}` (1-5), `order-first`, `order-last`
*   **Grow/Shrink:** `flex-grow-0`, `flex-grow-1`, `flex-shrink-0`, `flex-shrink-1`

All of these also have responsive variants (e.g., `flex-md-column`, `justify-content-lg-end`).

Example:
```html
<div class="d-flex justify-content-around align-items-center bg-secondary p-3" style="height: 100px;">
    <div class="p-2 bg-primary text-white">Item 1</div>
    <div class="p-2 bg-success text-white">Item 2</div>
    <div class="p-2 bg-danger text-white">Item 3</div>
</div>
```

### 4. Text Utilities

*   **Alignment:** `text-start`, `text-center`, `text-end`, `text-{breakpoint}-start/center/end`
*   **Transformation:** `text-lowercase`, `text-uppercase`, `text-capitalize`
*   **Weight & Italic:** `fw-bold`, `fw-normal`, `fw-light`, `fst-italic`
*   **Colors:** `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-light`, `text-dark`, `text-white`, `text-body`, `text-muted`
*   **Backgrounds:** `bg-primary`, `bg-secondary`, etc.
*   **Word Wrap:** `text-wrap`, `text-nowrap`
*   **Truncation:** `text-truncate` (requires `display: inline-block` or `block` and `max-width`)

Example:
```html
<p class="text-center text-primary fw-bold">Centered, primary colored, bold text.</p>
<p class="text-end text-sm-start">Right-aligned, but left-aligned on small screens and up.</p>
<div class="bg-dark text-white p-2">Dark background with white text.</div>
```

### 5. Sizing

*   **Width:** `w-25`, `w-50`, `w-75`, `w-100`, `mw-100` (max-width)
*   **Height:** `h-25`, `h-50`, `h-75`, `h-100`, `mh-100` (max-height)

Example:
```html
<div class="w-50 bg-success p-2">This div is 50% width.</div>
<div class="h-100 bg-info p-2" style="height: 150px;">This div is 100% height of its parent (parent needs defined height).</div>
```

### 6. Borders

*   `border`: Adds border on all sides.
*   `border-top`, `border-end`, `border-bottom`, `border-start`
*   `border-0`: Removes all borders.
*   `border-{side}-0`: Removes specific border.
*   `border-{color}`: `border-primary`, `border-success`, etc.
*   `rounded`: Adds border-radius.
*   `rounded-circle`, `rounded-pill`
*   `rounded-{0-5}`: Specific border-radius sizes.
*   `rounded-top`, `rounded-end`, `rounded-bottom`, `rounded-start`

Example:
```html
<div class="p-3 border border-primary rounded">A bordered, rounded box.</div>
<img src="..." class="img-fluid rounded-circle" alt="...">
```

### 7. Shadows

*   `shadow-sm`, `shadow`, `shadow-lg`, `shadow-none`

Example:
```html
<div class="p-3 bg-white shadow">A box with a medium shadow.</div>
```

### 8. Visibility

*   `visible`, `invisible` (maintains layout space)

### 9. Position

*   `position-static`, `position-relative`, `position-absolute`, `position-fixed`, `position-sticky`
*   `top-0`, `start-0`, `bottom-0`, `end-0` (for `0` offset)

Example:
```html
<div class="position-relative bg-light p-5">
    Relative parent
    <div class="position-absolute top-0 start-0 bg-primary text-white p-1">Absolute top-left</div>
</div>
```

## Components

This is where Bootstrap truly shines, offering pre-styled and often interactive UI elements. This is where you'll see parallels with Material-UI, but with different class names and customization methods.

### 1. Buttons

*   **Base Class:** `btn`
*   **Contextual Styles:** `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-warning`, `btn-info`, `btn-light`, `btn-dark`, `btn-link`
*   **Outline Buttons:** `btn-outline-primary`, etc.
*   **Sizes:** `btn-lg`, `btn-sm`
*   **Block Buttons:** `d-grid gap-2` on parent for full-width buttons.
*   **States:** `active`, `disabled`

Example:
```html
<button type="button" class="btn btn-primary">Primary Button</button>
<button type="button" class="btn btn-outline-secondary btn-lg">Large Outline Button</button>
<a href="#" class="btn btn-success btn-sm disabled" tabindex="-1" role="button" aria-disabled="true">Disabled Link Button</a>

<div class="d-grid gap-2">
    <button class="btn btn-primary" type="button">Full-width button</button>
    <button class="btn btn-secondary" type="button">Full-width button</button>
</div>
```
### 2. Alerts

Provide contextual feedback messages.

*   `alert`
*   `alert-primary`, `alert-secondary`, `alert-success`, `alert-danger`, etc.
*   `alert-dismissible fade show` (for dismissible alerts with a close button, requires JS)

Example:
```html
<div class="alert alert-success" role="alert">
    A simple success alert—check it out!
</div>
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

### 3. Badges

Small count and labeling components.

*   `badge`
*   `text-bg-primary`, `text-bg-secondary`, etc. (for colored backgrounds)
*   `rounded-pill` for pill-shaped badges

Example:
```html
<h1>Example heading <span class="badge text-bg-secondary">New</span></h1>
<button type="button" class="btn btn-primary">
    Notifications <span class="badge text-bg-light">4</span>
</button>
<span class="badge text-bg-danger rounded-pill">Urgent</span>
```

### 4. Cards

Flexible content containers with header, footer, image, and content sections.

*   `card`
*   `card-header`, `card-body`, `card-title`, `card-subtitle`, `card-text`, `card-link`, `card-footer`
*   `card-img-top`, `card-img-bottom`
*   Grid system often used for card layouts.

Example:
```html
<div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

### 5. Navbar

Responsive navigation header for your application.

*   `navbar`
*   `navbar-expand-{breakpoint}`: Controls when the navbar collapses (e.g., `navbar-expand-lg` means it expands on large screens and up).
*   `navbar-light` / `navbar-dark`: For text/icon colors to contrast with light/dark backgrounds.
*   `bg-light`, `bg-dark`, `bg-primary`, etc. (for background colors)
*   `container-fluid` / `container` for internal content width.
*   `navbar-brand` (for logo/brand name)
*   `navbar-nav` (for navigation items, usually `ul.nav-item > a.nav-link`)
*   `navbar-toggler` / `navbar-toggler-icon` (for the responsive hamburger menu, requires JS)
*   `collapse navbar-collapse` (the collapsible part, requires JS)
*   `dropdown` for dropdown menus within the navbar (requires JS)

Example:
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">My Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
```

### 6. Forms

Bootstrap provides extensive styling for form controls.

*   **Form Controls:** `form-control` (for `input`, `textarea`, `select`)
*   **Checkboxes & Radios:** `form-check`, `form-check-input`, `form-check-label`
*   **Switches:** `form-check form-switch`
*   **Range Input:** `form-range`
*   **Input Groups:** `input-group` (for adding prefixes, suffixes, buttons to inputs)
*   **Validation:** Classes like `is-valid`, `is-invalid`, `valid-feedback`, `invalid-feedback` for visual feedback (requires JS for actual validation logic).

Example:
```html
<form>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### 7. Modals

Dialog boxes/popup windows. Requires Bootstrap JavaScript.

*   `modal`, `modal-dialog`, `modal-content`, `modal-header`, `modal-title`, `modal-body`, `modal-footer`
*   `data-bs-toggle="modal"` and `data-bs-target="#idOfModal"` on the trigger element.

Example:
```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

### 8. Carousel

A slideshow component for cycling through elements—images or slides of text—like a carousel. Requires Bootstrap JavaScript.

*   `carousel`, `carousel-inner`, `carousel-item`, `carousel-control-prev`, `carousel-control-next`, `carousel-indicators`

Example (simplified):
```html
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://via.placeholder.com/800x400/0000FF/FFFFFF?text=First+slide" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Second+slide" class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
```

### Other Notable Components

*   **Accordion:** Collapsible content sections.
*   **Dropdowns:** Toggleable, contextual overlays for displaying lists of links or actions.
*   **List Groups:** Flexible and powerful list of content.
*   **Navs & Tabs:** Navigation components, often used with tabs for switching content.
*   **Pagination:** Links for navigating between pages.
*   **Popovers:** Small overlay content containers.
*   **Progress Bars:** For showing progress.
*   **Spinners:** Loading indicators.
*   **Toasts:** Push notifications.
*   **Tooltips:** Custom tooltips.

## Customization

While Bootstrap provides a lot out-of-the-box, you'll often want to customize its look and feel to match your brand.

### 1. Overriding with Custom CSS

The simplest way is to add your own CSS file after Bootstrap's CSS. This leverages CSS's cascade.

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Your Custom CSS (after Bootstrap) -->
<link href="style.css" rel="stylesheet">
```

```css
/* style.css */
/* Example: Change primary button background */
.btn-primary {
    background-color: #6f42c1; /* A custom purple */
    border-color: #6f42c1;
}

/* Example: Increase padding for all alerts */
.alert {
    padding: 2rem;
}
```

### 2. Sass (Recommended for Deeper Customization)

Bootstrap is built with Sass. If you're using npm, you can include Bootstrap's source Sass files and override variables before Bootstrap itself compiles. This is the most powerful way to customize.

1.  **Install Sass:** `npm install sass`
2.  **Create a custom Sass file** (e.g., `src/custom.scss`):

    ```scss
    // 1. Customize variables
    // Override Bootstrap's default variables
    $primary: #ff6347; // Tomato red
    $enable-shadows: true;
    $spacer: 1.5rem; // Increase default spacing unit

    // 2. Import Bootstrap's functions, variables, and mixins
    @import "bootstrap/scss/functions";
    @import "bootstrap/scss/variables";
    @import "bootstrap/scss/mixins";

    // 3. Optional: Add your own custom variables or maps
    $custom-font-sizes: (
      "h1": 3.5rem,
      "h2": 2.5rem
    );
    $font-sizes: map-merge($font-sizes, $custom-font-sizes);

    // 4. Import the rest of Bootstrap
    @import "bootstrap/scss/bootstrap";

    // 5. Add your own custom styles here (after Bootstrap imports)
    .my-custom-class {
        font-family: 'Comic Sans MS', cursive;
        color: darken($primary, 10%);
    }
    ```

3.  **Import your `custom.scss`** into your project's main entry point (e.g., `src/index.js` in React):

    ```javascript
    import './custom.scss'; // Make sure your build process handles Sass
    ```

This approach allows you to change colors, fonts, spacing, enable/disable features (like shadows or gradients), and even include/exclude specific Bootstrap components to reduce bundle size.

## How Bootstrap JS Works

Bootstrap's interactive components (Navbar toggler, Modals, Carousels, Dropdowns, Tooltips, Popovers, etc.) rely on JavaScript.

*   **jQuery (Bootstrap 3/4):** Older versions of Bootstrap were heavily dependent on jQuery.
*   **Vanilla JavaScript (Bootstrap 5+):** Bootstrap 5 has removed jQuery dependency, using pure JavaScript. It requires Popper.js for specific elements (like tooltips and popovers), but this is bundled if you use `bootstrap.bundle.min.js`.


Bootstrap JS components are activated via data attributes in HTML or programmatically through JavaScript.

**Data Attributes (Recommended for simplicity):**
Most common and easiest. Just add `data-bs-toggle` and `data-bs-target` (or `data-bs-slide`, etc.) to your HTML elements.

```html
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Open Modal</button>
```

**Programmatic API (For advanced control, e.g., in React components):**
You can also initialize components and call methods directly in JavaScript.

```javascript
import { Modal } from 'bootstrap';

// To initialize a modal manually
const myModal = new Modal(document.getElementById('myModal'), {
  keyboard: false
});

// To show it
myModal.show();

// To hide it
myModal.hide();
```

In a React environment, you would typically manage the state of these components (like `showModal`) and use `useEffect` hooks to interact with the Bootstrap JavaScript API when the component mounts or updates. This avoids directly manipulating the DOM outside of React's lifecycle.

## Accessibility

Bootstrap prioritizes accessibility. It uses ARIA attributes and thoughtful HTML structure to ensure components are usable by people with disabilities. Always try to follow semantic HTML and include necessary ARIA attributes when building your components.

## Differences from Material-UI

You're coming from Material-UI, so here are some key differences to note:

*   **CSS vs. CSS-in-JS:** Bootstrap is primarily a CSS framework. While you can use it with React, its components are HTML structures with classes, not React components that generate those structures (unless you use a library like `react-bootstrap`). Material-UI is a CSS-in-JS library that provides actual React components.
*   **Styling Philosophy:** Bootstrap uses a class-based utility approach heavily. You add classes like `p-3`, `d-flex`, `text-center` directly to your HTML. Material-UI encourages prop-based styling (e.g., `sx` prop or `makeStyles`/`styled`).
*   **Component Structure:** Bootstrap components are HTML snippets you assemble and style with classes. Material-UI components are React components that encapsulate behavior and styling.
*   **Theming:** Material-UI has a robust theme provider system for consistent styling via JavaScript. Bootstrap's core theming is done via Sass variables and compilation.
*   **JavaScript:** Bootstrap has its own vanilla JavaScript for interactive components. Material-UI's interactivity is baked into its React components.
*   **Learning Curve:** You'll spend more time learning Bootstrap's vast array of utility classes and component HTML structures. With Material-UI, you learn the component API.

## Conclusion

Bootstrap is a powerful, mature, and widely used front-end framework. It's excellent for quickly building responsive layouts and common UI patterns.
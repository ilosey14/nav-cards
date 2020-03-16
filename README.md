# nav-cards

*Easy Navigable Markup*

Create a responsive user experience with only HTML!

---

This is a small library that builds and connects single-page navigation through HTML classes.
There's really not much to it.

Make a container with cards (children).

Add action attributes to any element.

```html
<div id="my-nav" class="nav-container">
    <div class="nav-card show" data-name="card-1">
        <p>Card 1</p>
        <input type="button" value="Continue" data-nav="click:card-2">
    </div>
    <div class="nav-card" data-name="card-2">
    ...
</div>

...

<script src="/src/nav-cards.js"></script>
```

See the example page in the source for a live demo.

---

## Actions

Each action navigates to a named card within its parent.
Any DOM event can be used.
Multiple actions follow the inline style syntax.

```html
<element data-nav="click: card-2; dblclick: card-3;">
```

## Styling & Animations

Enable a swapping animation by adding `nav-swap` to the container's class name.

Of course, add your own styles, transitions, and sub classes for full customization.

## Javascript

(Optional) Control nav-cards with Javascript using the `navCards` object.
If this functionality is required, you must add an `id` or `data-name` attribute
to your container.

```javascript
navCards['my-nav'].showCard('card-2');
```

### Reference

```typescript
navCards[name: string]: NavCards
```

Global nav-cards index.

---

```typescript
NavCards(container: HTMLElement | string): NavCards
```

Constructor

Creates a NavCards navigable interface object.

*@param* `container` - The container element or its `id`.

---

```typescript
NavCards.prototype.showCard(name: string): void
```

Shows the provided card by name.

*@param* `name` - Name of the card to show.
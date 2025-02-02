##### button group

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faAngleDown } = require('@fortawesome/free-solid-svg-icons');

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <ButtonGroup className="rainbow-m-around_medium">
        <Button label="Refresh" variant="neutral" />
        <Button label="Edit" variant="neutral" />
        <Button label="Save" variant="neutral" />
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <Button label="Refresh" variant="outline-brand" />
        <Button label="Edit" variant="outline-brand" />
        <Button label="Save" variant="outline-brand" />
    </ButtonGroup>
</div>;
```

##### button group with overflow menu icon

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faAngleDown } = require('@fortawesome/free-solid-svg-icons');

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-m-horizontal_medium">
    <ButtonGroup>
        <Button label="Refresh" variant="neutral" />
        <Button label="Edit" variant="neutral" />
        <Button label="Save" variant="neutral" />
        <ButtonMenu
            menuAlignment="right"
            menuSize="x-small"
            icon={<FontAwesomeIcon icon={faAngleDown} className="rainbow-color_brand" />}
        >
            <MenuItem label="Menu Item One" />
            <MenuItem label="Menu Item Two" />
            <MenuItem label="Menu Item Three" />
        </ButtonMenu>
    </ButtonGroup>
</div>;
```

##### button group with icon

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faPlus, faPencilAlt, faPaste, faAngleDown } = require('@fortawesome/free-solid-svg-icons');

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <ButtonGroup className="rainbow-m-around_medium">
        <Button variant="neutral">
            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
            Add
        </Button>
        <Button variant="neutral">
            <FontAwesomeIcon icon={faPencilAlt} className="rainbow-m-right_small" />
            Edit
        </Button>
        <Button variant="neutral">
            <FontAwesomeIcon icon={faPaste} className="rainbow-m-right_small" />
            Paste
        </Button>
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPlus} />} />
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPaste} />} />
        <ButtonMenu
            menuAlignment="right"
            menuSize="x-small"
            icon={<FontAwesomeIcon icon={faAngleDown} />}
        >
            <MenuItem label="Menu Item One" />
            <MenuItem label="Menu Item Two" />
            <MenuItem label="Menu Item Three" />
        </ButtonMenu>
    </ButtonGroup>
</div>;
```

##### button group with button disabled

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faPlus, faPencilAlt, faPaste, faAngleDown } = require('@fortawesome/free-solid-svg-icons');

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <ButtonGroup className="rainbow-m-around_medium">
        <Button label="Refresh" variant="neutral" />
        <Button label="Edit" variant="neutral" />
        <Button label="Save" variant="neutral" disabled />
        <ButtonIcon
            variant="border-filled"
            disabled
            icon={<FontAwesomeIcon icon={faAngleDown} />}
        />
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <Button variant="neutral">
            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
            Add
        </Button>
        <Button variant="neutral" disabled>
            <FontAwesomeIcon icon={faPencilAlt} className="rainbow-m-right_small" />
            Edit
        </Button>
        <Button variant="neutral" disabled>
            <FontAwesomeIcon icon={faPaste} className="rainbow-m-right_small" />
            Paste
        </Button>
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPlus} />} />
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
        <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faPaste} />} />
        <ButtonIcon
            variant="border-filled"
            disabled
            icon={<FontAwesomeIcon icon={faAngleDown} />}
        />
    </ButtonGroup>
</div>;
```

##### buttons group with button inverse

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faPlus, faPencilAlt, faPaste, faAngleDown } = require('@fortawesome/free-solid-svg-icons');

<div className="rainbow-border-radius_oval rainbow-background-color_dark-1 rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <ButtonGroup className="rainbow-m-around_medium">
        <Button label="Refresh" variant="border-inverse" />
        <Button label="Edit" variant="border-inverse" />
        <Button label="Save" variant="border-inverse" />
        <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faAngleDown} />} />
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <Button variant="border-inverse">
            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
            Add
        </Button>
        <Button variant="border-inverse">
            <FontAwesomeIcon icon={faPencilAlt} className="rainbow-m-right_small" />
            Edit
        </Button>
        <Button variant="border-inverse">
            <FontAwesomeIcon icon={faPaste} className="rainbow-m-right_small" />
            Paste
        </Button>
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faPlus} />} />
        <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
        <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faPaste} />} />
        <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faAngleDown} />} />
    </ButtonGroup>
</div>;
```

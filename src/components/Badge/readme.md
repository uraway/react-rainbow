##### badges border

```js
<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Badge
        className="rainbow-m-around_medium"
        label="Lightest Badge"
        variant="lightest"
        title="the badge title"
    />

    <Badge
        className="rainbow-m-around_medium"
        label="Outline Badge"
        variant="outline-brand"
        title="the badge title"
    />
</div>
```

##### badges variant

```js
<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Badge className="rainbow-m-around_medium" label="Default Badge" title="the badge title" />

    <Badge
        className="rainbow-m-around_medium"
        label="Darker Badge"
        variant="inverse"
        title="the badge title"
    />

    <Badge
        className="rainbow-m-around_medium"
        label="Brand Badge"
        variant="brand"
        title="the badge title"
    />
</div>
```

##### badges with icons

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faStar } = require('@fortawesome/free-solid-svg-icons');

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Badge variant="inverse" title="the badge title" className="rainbow-m-around_medium">
        <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
        112 005
    </Badge>
    <Badge variant="lightest" title="the badge title" className="rainbow-m-around_medium">
        <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
        212 002
    </Badge>
    <Badge variant="lightest" title="the badge title" className="rainbow-m-around_medium">
        <FontAwesomeIcon icon={faStar} size="lg" />
    </Badge>
</div>;
```

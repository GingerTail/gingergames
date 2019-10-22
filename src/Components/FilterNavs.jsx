import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import "../stylesheets/filterNavs.css"

const FilterNavs = (props) => {
  return (
    <div>
      <Nav vertical>
      <h5>Price</h5>
      <form action="#">
  <p>
    <input type="radio" id="test1" name="radio-group"/>
    <label for="test1">Under 5$</label>
  </p>
  <p>
    <input type="radio" id="test2" name="radio-group"/>
    <label for="test2">Under 10$</label>
  </p>
  <p>
    <input type="radio" id="test3" name="radio-group"/>
    <label for="test3">Under 25$</label>
  </p>
  <p>
    <input type="radio" id="test4" name="radio-group"/>
    <label for="test4">25$+</label>
  </p>
  <p>
    <input type="radio" id="test5" name="radio-group"/>
    <label for="test5">Free</label>
  </p>
<hr />
</form>
<h5>System</h5>
      <form action="#">
  <p>
    <input type="radio" id="test1" name="radio-group"/>
    <label for="test1">Windows</label>
  </p>
  <p>
    <input type="radio" id="test2" name="radio-group"/>
    <label for="test2">Playstation 4</label>
  </p>
  <p>
    <input type="radio" id="test3" name="radio-group"/>
    <label for="test3">Xbox One</label>
  </p>
  <p>
    <input type="radio" id="test4" name="radio-group"/>
    <label for="test4">Google Stadia</label>
  </p>
  <p>
    <input type="radio" id="test5" name="radio-group"/>
    <label for="test5">Nintendo Switch</label>
  </p>
  <hr/>
</form>
<h5>Language</h5>
      <form action="#">
  <p>
    <input type="radio" id="test1" name="radio-group"/>
    <label for="test1">English</label>
  </p>
  <p>
    <input type="radio" id="test2" name="radio-group"/>
    <label for="test2">Italian</label>
  </p>
  <p>
    <input type="radio" id="test3" name="radio-group"/>
    <label for="test3">Espanol</label>
  </p>
  <p>
    <input type="radio" id="test4" name="radio-group"/>
    <label for="test4">Francais</label>
  </p>
  <p>
    <input type="radio" id="test5" name="radio-group"/>
    <label for="test5">Deutusch</label>
  </p>
  <p>
    <input type="radio" id="test6" name="radio-group"/>
    <label for="test6">日本語</label>
  </p>
  <p>
    <input type="radio" id="test7" name="radio-group"/>
    <label for="test7">Other</label>
  </p>
<hr />
</form>

      </Nav>
    </div>
  );
}

export default FilterNavs;
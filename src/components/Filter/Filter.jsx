import { Button, Item, List } from './Filter.styled';

export default function Filter() {
  return (
    <>
      <List>
        <Item>
          <Button type="button">All</Button>
        </Item>
        <Item>
          <Button type="button">Web sites</Button>
        </Item>
        <Item>
          <Button type="button">Applications</Button>
        </Item>
        <Item>
          <Button type="button">Design</Button>
        </Item>
        <Item>
          <Button type="button">Marketing</Button>
        </Item>
      </List>
    </>
  );
}

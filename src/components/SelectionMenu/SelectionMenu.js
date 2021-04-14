import {
  MenuContainer,
  Divider,
  Title,
  Checkbox,
  Button,
  Label,
  ButtonWrapper,
} from "./styled";

function SelectionMenu({
  data,
  selected,
  setSelected,
  setSubtitles,
  subtitles,
}) {
  const removeItem = (option) => {
    let arr = [...selected];
    let index = arr.indexOf(option);
    arr.splice(index, 1);
    setSelected(arr);
  };

  const handleChange = (event) => {
    const found = selected.find((option) => option.name === event.target.value);

    if (found) {
      removeItem(found);
    } else {
      if (selected.length >= 3) {
        selected.shift();
      }
      setSelected([
        ...selected,
        data.find(({ name }) => name === event.target.value),
      ]);
    }
  };

  return (
    <MenuContainer>
      <Divider />
      <Title>Select up to 3 solutions to compare</Title>
      {data.map((item) => (
        <ButtonWrapper key={item.key}>
          <Button>
            <Label>
              <Checkbox
                value={item.name}
                checked={selected.findIndex((it) => it.name === item.name) !== -1}
                onChange={handleChange}
              />
              <span>{item.name}</span>
            </Label>
          </Button>
        </ButtonWrapper>
      ))}
    </MenuContainer>
  );
}

export default SelectionMenu;

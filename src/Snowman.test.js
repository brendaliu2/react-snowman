import { render, fireEvent } from "@testing-library/react";
import Snowman from './Snowman';

describe('test Snowman component', function () {

  it('shows correct display when lose', function () {

    //if nWrong = maxGuesses ...
    // hidden letter buttons, show you lose message, remove photo, display correct word
    const { container } = render(<Snowman words={["apple"]} />);

    fireEvent.click(container.querySelector('.z'));
    fireEvent.click(container.querySelector('.w'));
    fireEvent.click(container.querySelector('.y'));
    fireEvent.click(container.querySelector('.m'));
    fireEvent.click(container.querySelector('.h'));
    fireEvent.click(container.querySelector('.n'));


    const snowmanDiv = container.querySelector('.Snowman');
    expect(snowmanDiv).toContainHTML('You lose!');
    expect(snowmanDiv).toContainHTML('apple');
    expect(container.querySelector('img')).not.toBeInTheDocument();
  });



});
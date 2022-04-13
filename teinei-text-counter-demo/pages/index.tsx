import type { NextPage } from "next";
import { useMemo, useState } from "react";
import { countGraphemeClusters } from "teinei-text-counter";
import cn from "classnames";

type State = {
  text: string;
};

const Home: NextPage = () => {
  const [state, setState] = useState<State>({
    text: "",
  });

  const jsLength = useMemo(() => state.text.length, [state.text]);

  const graphemes = useMemo(
    () => countGraphemeClusters(state.text),
    [state.text]
  );

  return (
    <>
      <style jsx>{`
        .container {
          width: 100%;
          margin: 30vh auto;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        }
        .container input {
          width: 24rem;
          font-size: 2rem;
          margin: 1rem;
        }
        .counter {
          display: flex;
          flex-flow: column;
          align-items: flex-end;
          gap: 1rem;
          font-size: 2rem;
        }
        .counter > * {
          padding-right: 4rem;
        }
        .has-gap {
          color: magenta;
        }
      `}</style>
      <div className="container">
        <input
          value={state.text}
          onChange={({ target: { value } }) => {
            setState({ text: value });
          }}
        />
        <div className="counter">
          <div className={cn({ ["has-gap"]: jsLength !== graphemes })}>
            String.length: {jsLength}
          </div>
          <div>countGraphemeClusters: {graphemes}</div>
        </div>
      </div>
    </>
  );
};

export default Home;

import { formatEther } from "@ethersproject/units";
import { useWeb3React } from "@web3-react/core";
import React from "react";
export var myBalance = null;

export function Balance() {
  const { account, library, chainId } = useWeb3React();
  const [balance, setBalance] = React.useState<number | null>();

  React.useEffect((): any => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance);
            myBalance=balance;
            console.log(balance);
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null);
            myBalance=null;
          }
        });

      return () => {
        stale = true;
        setBalance(undefined);
        myBalance=null;
      };
    }
  }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <div className="btn btn-ghost btn-sm rounded-btn">
      <span>Balance</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 hover:text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
      <span>{balance === null ? "Error" : balance ? `Ξ${formatEther(balance)}` : ""}</span>
    </div>
  );
}

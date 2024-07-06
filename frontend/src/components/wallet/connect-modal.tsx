"use client";
import React from "react";

import { useConnect, Connector } from "@starknet-react/core";
import Dialog from "../ui/Dialog";
import { Button } from "../ui/Button"

export default function ConnectModal() {
    const { connect, connectors } = useConnect();
    return (
        <div className="w-full flex justify-end">
          <Dialog title="Connect Wallet">
            <div className="flex flex-col items-center">
                {connectors.map((connector: Connector) => (
                    <Button key={connector.id} 
                            onClick={() => connect({connector})}
                            disabled={!connector.available()} 
                            >
                        Connect with {connector.name}
                    </Button>
                ))}
            </div>
          </Dialog>
        </div>
    )
}
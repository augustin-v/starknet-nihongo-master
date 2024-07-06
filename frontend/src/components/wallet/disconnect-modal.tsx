"use client";
import React from "react";

import { useAccount, useDisconnect } from "@starknet-react/core";
import Dialog from "../ui/Dialog";
import { Button } from "../ui/Button";
export default function DisconnectModal() {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();

    const handleDisconnectClick = () => {
        disconnect()
    }
    const addressShort = address
      ? `${address.slice(0, 6)}...${address.slice(-4)}`
      : null;

      return (
        <div className="w-full flex justify-end">
            <Dialog title="Disconnect Wallet">
                <div className="p-4">
                    <p>Your address: {addressShort}</p>
                    <Button onClick={handleDisconnectClick}>Disconnect</Button>
                </div>
            </Dialog>
        </div>
      )
}
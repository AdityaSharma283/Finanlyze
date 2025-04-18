import { getAccountWithTransactions } from "@/actions/accounts";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import TransactionTable from "../components/transaction-table";
import { BarLoader } from "react-spinners";
import AccountChart from "../components/account-chart";

const AccountsPage = async ({ params }) => {
    const resolvedParams = await params; // Await the params object
    const { id } = resolvedParams; // Now destructure it safely

    const accountData = await getAccountWithTransactions(id);

    if (!accountData) {
        notFound();
    }

    const { transactions, ...account } = accountData;

    return (
        <div className="space-y-8 px-5 ">
            <div className="flex gap-4 items-end justify-between">
            <div>
                <h1 className="text-5xl sm:text-6xl font-bold gradient-title capitalize">{account.name}</h1>
                <p className="text-muted-foreground">
                    {account.type.charAt(0).toUpperCase() + account.type.slice(1).toLowerCase()} Account
                </p>
            </div>
            <div className="text-right pb-2">
                <div className="text-xl sm:text-2xl font-bold">
                Rs {parseFloat(account.balance).toFixed(2)}
                </div>
                <p className="text-sm text-muted-foreground">{account._count.transactions} Transactions</p>
            </div>
            </div>
       {/*Chart section */}
       <Suspense 
        fallback={<BarLoader className="mt-4" width={"100%"}color="#33ea9b" />}>
        <AccountChart transactions={transactions} />
       </Suspense>
       {/* Transaction Table */}
       <Suspense 
        fallback={<BarLoader className="mt-4" width={"100%"}color="#33ea9b" />}>
        <TransactionTable transactions={transactions}/>
       </Suspense>
        </div>
    );
};

export default AccountsPage;


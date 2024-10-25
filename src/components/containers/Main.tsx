import React from "react";

function Main({ children }: any): JSX.Element {
    return ( 
        <main className='min-h-screen flex flex-1 flex-col gap-5 text-justify bg-neutral-100 dark:bg-neutral-900'>
            {children}
        </main>
    )
}

export default Main;
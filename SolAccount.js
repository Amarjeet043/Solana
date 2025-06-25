const solanaWeb3=require('@solana/web3.js');
const fs=require('fs');
const {Keypair,Connection,SystemProgram,Transaction,sendAndConfirmTransaction }=solanaWeb3;
const connection=new Connection(solanaWeb3.clusterApiUrl('devnet'),'confirmed');
const dataAccount=Keypair.generate();
const payer=Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync(`/Users/amarjeet/.config/solana/id.json`,"utf-8"))));

async function createAccount(){
    const tx=new Transaction().add(
        SystemProgram.createAccount({
     
            fromPubkey:payer.publicKey,
   
             newAccountPubkey:dataAccount.publicKey,
             lamports: await connection.getMinimumBalanceForRentExemption(1000),
             space: 1000,
             programId: SystemProgram.programId
            })
            );
            //On chain send payer to create account dataAccount need its key for 
            //account Creatio
   const txId=await sendAndConfirmTransaction(connection,tx,[payer,dataAccount]);
   console.log(`Created account with trasctionid ${txId}`); 

  
}
createAccount();
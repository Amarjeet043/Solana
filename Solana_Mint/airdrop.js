const {Connection,LAMPORTS_PER_SOL,clusterApiUrl,PublicKey}=require('@solana/web3.js');
const connection=new Connection(clusterApiUrl('devnet'),'Confirmed');
async function airdrop(publicKey,amount){
    const airdropSignature=await connection.requestAirdrop(new PublicKey(publicKey),amount);
    await connection.confirmTransaction({signature:airdropSignature});
    // return airdropSignature;
    

}
airdrop('4zWodHrSuijrQTCnordDEoeYNNn9t9aCDZfC2pR6nYMo',LAMPORTS_PER_SOL).then(signature=>{
    console.log('Airdrop Signature:',signature);
})
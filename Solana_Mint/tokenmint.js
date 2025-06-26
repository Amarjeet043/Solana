const {createMint}=require('@solana/spl-token');


const {Keypair,Connection,clusterApiUrl,TOKEN_PROGRAM_ID}=require('@solana/web3.js');
const payer=Keypair.fromSecretKey(Uint8Array.from([144,232,144,156,7,131,137,21,88,148,146,232,219,100,229,42,66,104,195,180,138,245,177,34,168,233,225,41,172,12,188,45,59,78,221,195,117,221,182,129,42,125,39,105,140,110,122,72,153,72,8,47,193,102,79,90,170,64,191,171,113,45,228,170]));
const mintAuthority=payer;

const connection=new Connection(clusterApiUrl('devnet'),`confirmed`);
async function createMintforToken(payer,mintAuthority){
    const mint=await createMint(
        connection,
        payer,
        mintAuthority,
        null,
        7,
        TOKEN_PROGRAM_ID


    );
    console.log('Mint Created at',mint.toBase58());
    return mint;
}
async function main(){
    const mint= await createMintforToken(payer,mintAuthority.publicKey);

}
// main();
module.exports = {
    createMintforToken,
    connection,
    payer,
    mintAuthority
  };

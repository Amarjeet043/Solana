const { createMintforToken,connection,payer,mintAuthority, } = require('./tokenmint.js');
const{getOrCreateAssociatedTokenAccount,mintTo}=require('@solana/spl-token');
const { PublicKey } = require('@solana/web3.js');

async function mintNewTokens(mint, to, amount) { 
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        payer,
        mint,
        new PublicKey(to)
      );

      console.log('Token account created at', tokenAccount.address.toBase58());
      await mintTo(
        connection,
        payer,
        mint,
        tokenAccount.address,
        payer,
        amount
      )
      console.log('Minted', amount, 'tokens to', tokenAccount.address.toBase58());
}

async function run() {
    const mint= await createMintforToken(payer,mintAuthority.publicKey);
    await mintNewTokens(mint, mintAuthority.publicKey, 100);    
}

run();

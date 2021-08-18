import crypto from 'crypto';

export class Crypto{
        
    algorithm = 'aes-256-ctr';
    secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
    iv = crypto.randomBytes(16);

    encrypt(text: string){

        const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, this.iv);
        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    
        return {
            iv: this.iv.toString('hex'),
            content: encrypted.toString('hex')
        };
    };

    decrypt(hash: any){
        const decipher = crypto.createDecipheriv(this.algorithm, this.secretKey, Buffer.from(hash.iv, 'hex'));
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    
        return decrpyted.toString();
    }
}

// export { Crypto.encrypt }
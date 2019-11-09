describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

     it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

<<<<<<< HEAD
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() =>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() =>{
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar "!#$%&()*+,-./0123456789:;<=>?@" para "!#$%&()*+,-./0123456789:;<=>?@" con offset 33', () => {
      assert.equal(cipher.encode(33, "!#$%&()*+,-./0123456789:;<=>?@"), "!#$%&()*+,-./0123456789:;<=>?@");
    });
    it('debería retornar " " para " " con offset 33',() =>{
      assert.equal(cipher.encode(33," ")," ");
    });
=======
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
     assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() => {
     assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz",33) , "hijklmnopqrstuvwxyzabcdefg");
    });
  
>>>>>>> cfd108475fadc7a88c3faf1e13b264caa59e3706
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

<<<<<<< HEAD
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',() =>{
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "!#$%&()*+,-./0123456789:;<=>?@" para "!#$%&()*+,-./0123456789:;<=>?@" con offset 33', () => {
      assert.equal(cipher.decode(33, "!#$%&()*+,-./0123456789:;<=>?@"), "!#$%&()*+,-./0123456789:;<=>?@");
    });
    it('debería retornar " " para " " con offset 33',() =>{
      assert.equal(cipher.decode(33," ")," ");
=======
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',()=>{
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg",33), "abcdefghijklmnopqrstuvwxyz");
>>>>>>> cfd108475fadc7a88c3faf1e13b264caa59e3706
    });
  });
});

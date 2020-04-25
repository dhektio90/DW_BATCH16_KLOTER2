def cetakGambar(panjang):

  
  for x in range(1,panjang+1):
     for y in range(1,panjang+1):
        if(x==y or x+y==panjang+1):
          print("x",end="" )
        else:
          print("o",end="")
                



cetakGambar(5);


/*
Hex to Decimal
https://www.codewars.com/kata/57a4d500e298a7952100035d

Complete the function which converts hex number (given as a string) to a decimal number.
*/

public class HexToDecimal {

  public static int hexToDec(final String hexString) {
    return Integer.parseInt(hexString, 16);
  }

}
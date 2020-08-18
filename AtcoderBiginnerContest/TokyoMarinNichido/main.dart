import 'dart:io';

void main() {
  print(Tag());
}

String Nickname() {
  String string = stdin.readLineSync();
  String s = string.substring(0, 3);
  return s;
}

String Tag() {
  String str_av = stdin.readLineSync();
  List list_av = str_av.split(' ');
  String str_bw = stdin.readLineSync();
  List list_bw = str_bw.split(' ');
  int a = int.parse(list_av[0]);
  int v = int.parse(list_av[1]);
  int b = int.parse(list_bw[0]);
  int w = int.parse(list_bw[1]);
  int t = int.parse(stdin.readLineSync());

  if ((a - b).abs() <= t * (v - w)) {
    return 'YES';
  } else {
    return 'NO';
  }
}

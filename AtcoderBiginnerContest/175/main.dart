import "dart:io";

void main() {
  String w = stdin.readLineSync();
  int output = rainySeason(w);
  print(output);
}

int rainySeason(String weather) {
  if (weather.contains('R')) {
    if (weather.contains('RR')) {
      if (weather.contains('RRR')) {
        return 3;
      }
      return 2;
    }
    return 1;
  } else {
    return 0;
  }
}

all:
	rm -f ruler.zip
	zip ruler.zip indes.js index.html *.png *.webapp

push:
	scp packaged.webapp radare.org:/srv/http/ffos/ruler
	scp ruler.zip radare.org:/srv/http/ffos/ruler

all:
	rm -f ruler.zip
	zip ruler.zip ruler.html index.js index.html *.png manifest.webapp

push:
	scp packaged.webapp radare.org:/srv/http/ffos/ruler
	scp ruler.zip radare.org:/srv/http/ffos/ruler

FROM rustembedded/cross:aarch64-unknown-linux-gnu-0.2.0
RUN apt update && apt install -yq --no-install-suggests --no-install-recommends python && ls /usr/bin

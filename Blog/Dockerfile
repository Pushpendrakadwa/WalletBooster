FROM openjdk:11
ADD ./target/Blog-0.0.1-SNAPSHOT.jar /usr/src/Blog-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "Blog-0.0.1-SNAPSHOT.jar"]
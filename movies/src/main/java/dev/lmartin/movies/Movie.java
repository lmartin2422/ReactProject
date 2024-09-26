package dev.lmartin.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data // for getters and setters
@AllArgsConstructor // for adding constructors
@NoArgsConstructor // another constructor that takes no parameters
public class Movie {
    @Id // lets the framework know there are unique IDs
    private ObjectId id;
    private String imdb;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;
    @DocumentReference  // only the ids of the reviews (manual relationships)
    private List<Review> reviewIds;  // an embedded relationship
}

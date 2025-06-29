# Bank Transaction Management System

A banking transaction management system built with Java 21, Spring Boot, and React.

## Features

- **Transaction Management**: Create, read, update, delete transactions
- **Pagination**: Efficient data retrieval with pagination
- **Batch Operations**: Delete multiple transactions at once
- **Type Filtering**: Filter by INCOME/EXPENSE
- **Error Handling**: Standardized error responses
- **Caching**: High-performance caching with Caffeine
- **Testing**: Comprehensive unit and integration tests

## Tech Stack

- **Backend**: Java 21, Spring Boot 3.5.3, H2 Database
- **Frontend**: React 18, TypeScript, Ant Design
- **Testing**: JUnit 5, JMeter, Mockito

## Dependencies

### Backend Dependencies

#### Core Framework
- **Spring Boot 3.5.3**: Main application framework
- **Spring Web**: RESTful web services support
- **Spring Data JPA**: Database access and ORM
- **Spring Security**: Authentication and authorization
- **Spring Cache**: Caching abstraction
- **Spring Validation**: Bean validation support

#### Database
- **H2 Database**: In-memory database for development and testing
- **Hibernate**: JPA implementation for ORM

#### Caching
- **Caffeine**: High-performance caching library
  - Provides in-memory caching with configurable eviction policies
  - Used for caching transaction data to improve performance

#### Utilities
- **Lombok**: Reduces boilerplate code
  - `@Data`, `@Builder`, `@Slf4j` annotations
  - Automatic getter/setter generation
  - Builder pattern implementation

#### Testing
- **JUnit 5**: Unit testing framework
- **Mockito**: Mocking framework for testing
- **Spring Boot Test**: Integration testing support

### Frontend Dependencies

#### Core Framework
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript

#### UI Components
- **Ant Design**: Enterprise UI component library
  - Table, Form, Modal, Button components
  - Responsive design system

#### HTTP Client
- **Axios**: Promise-based HTTP client
  - Used for API communication with backend

#### Development Tools
- **Create React App**: Development environment
- **React Scripts**: Build and development scripts

## Quick Start

### Option 1: Docker Deployment (Recommended)

```bash
# Build and run both services with Docker Compose
docker-compose up --build

# Or build and run manually
docker build -t bank-backend .
docker build -t bank-frontend ./frontend
docker run -p 8080:8080 bank-backend
docker run -p 3000:80 bank-frontend
```

### Option 2: Start Both Services

```bash
# Windows
start.bat

# Linux/Mac
chmod +x start.sh
./start.sh
```

### Option 3: Manual Start

#### Backend

```bash
# Build and run
mvn clean install
mvn spring-boot:run

# Generate test data
java -jar target/bank-backend.jar --generate-test-data
```

#### Frontend

```bash
cd frontend
npm install
npm start
```

### Access

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Swagger UI**: http://localhost:8080/swagger-ui.html

## API Endpoints

| Method | Endpoint                            | Description                  |
|--------|-------------------------------------|------------------------------|
| GET    | `/transactions`                     | Get all transactions         |
| GET    | `/transactions/list?page=0&size=10` | Get paginated transactions   |
| GET    | `/transactions/{id}`                | Get transaction by ID        |
| POST   | `/transactions`                     | Create transaction           |
| PUT    | `/transactions/{id}`                | Update transaction           |
| DELETE | `/transactions/{id}`                | Delete transaction           |
| DELETE | `/transactions/batch?ids=1,2,3`     | Delete multiple transactions |

## Testing

### Unit Tests
```bash
mvn test
```

### Performance Tests
```bash
# Run mixed stress test
jmeter-tests/run-mixed-stress-test.bat
```

## Performance Testing

The project includes comprehensive JMeter test plans:

- **Mixed Stress Test**: Tests all CRUD operations with delete operations at the end

### Running Tests
```bash
# Windows
jmeter-tests\run-mixed-stress-test.bat

# Linux/Mac
chmod +x jmeter-tests/run-mixed-stress-test.sh
./jmeter-tests/run-mixed-stress-test.sh
```

## Configuration

### Local Secret Configuration

The application uses a separate secret configuration file for sensitive data like database credentials.

**Important**: Create `src/main/resources/application-secret.yml` locally with your sensitive configuration:

```yaml
spring:
  datasource:
    username: your_username
    password: your_password
```

This file is automatically included via `spring.profiles.include: secret` in the main configuration.

### Environment Variables
- `REACT_APP_API_BASE_URL`: Frontend API base URL (default: http://localhost:8080)

### Cache Configuration
- **Max Size**: 1000 entries
- **Expire After Write**: 30 minutes
- **Expire After Access**: 10 minutes

## Project Structure

```
homework/
├── src/                    # Backend source
├── frontend/              # React frontend
├── jmeter-tests/          # Performance tests
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── pom.xml               # Maven config
└── README.md             # This file
```

## Configuration

### Frontend Environment

Create `frontend/.env`:

```env
REACT_APP_API_BASE_URL=http://localhost:8080
```

### Test Data

Edit `src/main/resources/test-data.json` to customize test data.

## Common Issues

- **Port conflicts**: Ensure ports 8080 and 3000 are available
- **CORS errors**: Check frontend URL in backend CORS config
- **Build errors**: Ensure Java 21+ is installed

## 📝 License

MIT License

## Docker

### Build Image
```bash
docker build -t bank-backend .
```

### Run Container
```bash
docker run -p 8080:8080 bank-backend
```

### Docker Compose
```bash
# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down
```
